package computerdatabase.sbl;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.stream.Stream;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

public class FeederTest extends Simulation {
	static int index = 1;
	HttpProtocolBuilder httpProtocol = http.acceptHeader(
			"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.doNotTrackHeader("1")
		.wsBaseUrl("ws://192.168.1.104:8082");

	Iterator<Map<String, Object>> feeder =
		Stream.generate(() -> {
				Map<String, Object> stringObjectMap = new HashMap<>();
				stringObjectMap.put("sessionIndex", index++);
				return stringObjectMap;
			}
		).iterator();
	ScenarioBuilder receiverScenario = scenario("listeners")
		.feed(feeder)
		.exec(
			ws("Connect WS").connect("/chat/testRoom/VU#{sessionIndex}")
				.await(1000).on(ws.checkTextMessage("receiveCheck").check()))
		.pause(1)
		.exec(ws("Closing WS").close());

	ScenarioBuilder senderScenario = scenario("sender")
		.feed(feeder)
		.pause(1)
		.exec(
			ws("Connect WS").connect("/chat/testRoom/VU#{sessionIndex}")
				.onConnected(exec(ws("sender").sendText("hi"))
				)
		)
		.exec(ws("Closing WS").close());

	{
		setUp(
			receiverScenario.injectOpen(atOnceUsers(10)),
			senderScenario.injectOpen(atOnceUsers(10))
		).protocols(httpProtocol);
	}
}

package computerdatabase.sbl;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.stream.Stream;

import io.gatling.javaapi.core.CheckBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

public class ReceiveCountLearn extends Simulation {
	static int senderIndex = 1;
	static int receiverIndex = 10001;
	HttpProtocolBuilder httpProtocol = http.acceptHeader(
			"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.doNotTrackHeader("1")
		.wsBaseUrl("ws://192.168.1.104:8082");

	Iterator<Map<String, Object>> senderFeeder =
		Stream.generate(() -> {
				Map<String, Object> stringObjectMap = new HashMap<>();
				stringObjectMap.put("sessionIndex", senderIndex++);
				return stringObjectMap;
			}
		).iterator();

	Iterator<Map<String, Object>> receiverFeeder =
		Stream.generate(() -> {
				Map<String, Object> stringObjectMap = new HashMap<>();
				stringObjectMap.put("sessionIndex", receiverIndex++);
				return stringObjectMap;
			}
		).iterator();
	ScenarioBuilder receiverScenario = scenario("listeners")
		.feed(receiverFeeder)
		.exec(
			ws("Ws#{sessionIndex}").connect("/chat/testRoom/VU#{sessionIndex}").await(100).on(
				ws.checkTextMessage("asdf").check(bodyString().saveAs("messageCount"))
			)
		);

	ScenarioBuilder senderScenario = scenario("sender")
		.feed(senderFeeder).exec(
			ws("Connect WS").connect("/chat/testRoom/VU#{sessionIndex}")
		)
		.repeat(5).on(exec(ws("sender").sendText("test")));

	{
		setUp(
			receiverScenario.injectOpen(atOnceUsers(1)),
			senderScenario.injectOpen(atOnceUsers(1))
		).protocols(httpProtocol);
	}
}

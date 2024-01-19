package computerdatabase.sbl.receive_message;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import java.util.Map;

public class ReceiveMessage_10000 extends Simulation {
    HttpProtocolBuilder httpProtocol = http
        .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
        .doNotTrackHeader("1")
        .wsBaseUrl("ws://192.168.1.104:8082");

    ScenarioBuilder scn = scenario("WebSocket")
        .exec(
            ws("Connect WS")
                .connect("/chat/testRoom/VU1")
                .onConnected(exec(ws("asdf").sendText("asdf")
                        .await(100).on(
                            ws.checkTextMessage("message").check(regex("asdf"))
                        )
                    )
                )
        );

    {
        setUp(scn.injectOpen(rampUsers(10000).during(30))).protocols(httpProtocol);
    }
}

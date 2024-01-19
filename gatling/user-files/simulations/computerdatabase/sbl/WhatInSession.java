package computerdatabase.sbl;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

public class WhatInSession extends Simulation {
	HttpProtocolBuilder httpProtocol = http.acceptHeader(
			"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.doNotTrackHeader("1")
		.wsBaseUrl("ws://192.168.1.104:8082");

	ScenarioBuilder receiverScenario = scenario("listeners").exec(
		session -> {
			ws("Connect WS").connect("/chat/testRoom/VU" + session.userId())
				.await(100).on(ws.checkTextMessage("receiveCheck").check());
			return session;
		}
	);
	ScenarioBuilder senderScenario = scenario("sender").exec(
		session -> {
			ws("Connect WS").connect("/chat/testRoom/VU" + session.userId())
				.onConnected(exec(ws("sender").sendText("hi")));
			return session;
		}
	);

	{
		setUp(
			receiverScenario.injectOpen(atOnceUsers(10)),
			senderScenario.injectOpen(atOnceUsers(10))
		).protocols(httpProtocol);
	}
}

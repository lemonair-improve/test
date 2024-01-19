package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.io.Source


class ConcurrentUserTest_10000 extends Simulation {

  val users = 10000
  val httpProtocol = http
//   .baseUrl("http://192.168.1.104:8082")
  .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
  .doNotTrackHeader("1")
//   .acceptLanguageHeader("en-US,en;q=0.5")
//   .acceptEncodingHeader("gzip, deflate")
//   .userAgentHeader("Gatling2")
  .wsBaseUrl("ws://192.168.1.104:8082")

val scn = scenario("WebSocket")
  .exec(
    ws("Connect WS").connect("/chat/testRoom/VU1")
    // ,
    // pause(10),
    // // repeat(2, "i")(
    // //   ws("Say Hello WS")
    // //     .sendText("text: #{i}th VU")
    // //     .await(30)(
    // //       ws.checkTextMessage("checkName").check(regex("text"))
    // //     )
    // // ),
    // ws("Close WS").close
  )
  setUp(
    scn.inject(atOnceUsers(users))
      .protocols(httpProtocol)
  )
}
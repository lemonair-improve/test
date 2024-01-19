package computerdatabase
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random
class WebsocketExampleSimulation extends Simulation {
  val httpProtocol = http
    .baseUrl("http://192.168.56.1:8082")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Gatling2")
    .wsBaseUrl("ws://192.168.56.1:8082")
  val feeder = Iterator.from(1).map(i => Map("userId" -> i))
  val connectScn = scenario("Connect to WebSocket")
    .feed(feeder)
    .exec(
      ws("Connect WS").connect("/chat/testRoom/VU${userId}")
    )
  val sendMessageScn = scenario("Send Messages")
    .exec(
      ws("Send Chat Message")
        .sendText("""{"text": "Hello, I'm ${userId}th user and this is message ${userId}!"}""")
    )
  val users = 50 // 50명의 가상 사용자
  val selectedUsers = 10 // 10명의 선택된 사용자
 val selectedFeeder = Iterator.continually(Map("selectedUserId" -> (Random.nextInt(users) + 1).toString))
  val sendMessageScenario = scenario("Send Messages")
    .feed(selectedFeeder)
    .exec(session => session.set("userId", session("selectedUserId").as[String]))
    .repeat(10) {
      exec(sendMessageScn).pause(100 milliseconds)
    }
  val selectedUserScenario = scenario("Selected Users")
    .during(60 seconds) {
      exec(sendMessageScenario)
        .pause(1 second)
    }
  val setUpScenario = scenario("WebSocket Simulation")
    .exec(connectScn)
    .pause(1 minute) // 웹소켓 연결 이후 1분 대기
    .exec(selectedUserScenario)
  setUp(
    setUpScenario.inject(atOnceUsers(users))
  ).protocols(httpProtocol)
}
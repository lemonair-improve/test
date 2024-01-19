import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import ws from "k6/ws";
import { check, sleep } from "k6";
import { Trend, Counter } from "k6/metrics";

const ip = "chat.lemonair.me";
const port = "8082";
const chatRoomName = "testRoom";
const sendReceiveInterval = new Trend("send_receive_interval", true);
const receiveCount = new Counter("receiveCount");
const openSocketCount = new Counter("openSocketCount");
const unExpectedSocketErrorCount = new Counter("unExpectedSocketErrorCount");
const expectedSocketErrorCount = new Counter("expectedSocketErrorCount");

const vus = 1;
export const options = {
  vus: vus,
  iterations: vus,
};

export default function () {
  // __VU = exec.vu.idInTest
  // sleep(0.01);
  const url = `wss://${ip}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };
  const sendMessage = randomString(10);
  let sendTime;
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);
      openSocketCount.add(1);
      // sendTime = new Date().getMilliseconds(); // 시작 시간 기록
      // socket.send(sendMessage);

      socket.setTimeout(function () {
        console.log("send event 발생");
        sendTime = new Date().getMilliseconds(); // 시작 시간 기록
        socket.send(sendMessage);
      }, 2000);
    });

    socket.on("message", function (receiveMessage) {
      if (receiveMessage.startsWith(`VU${__VU}`)) {
        console.log(receiveMessage);
        const receiveTime = new Date().getMilliseconds(); // 메시지를 받은 시간 기록
        console.log("sendtime: ", sendTime);
        console.log("receiveTime: ", receiveTime);

        const roundTripTime = receiveTime - sendTime; // 메시지 왕복 시간 계산
        sendReceiveInterval.add(roundTripTime); // 사용자 정의 지표에 왕복 시간 추가
        receiveCount.add(1);
        // socket.setTimeout(function () {
        socket.close(1000); // 정상 종료 코드 1000
        // }, 10000);
      }
    });

    socket.on("error", function (error) {
      if (e.error() != "websocket: close sent") {
        console.log("An unexpected error occured: ", e.error());
        unExpectedSocketErrorCount.add(1);
      } else {
        console.log(" close sent 이면? :", error.error());
        expectedSocketErrorCount.add(1);
      }
    });
    socket.setTimeout(function () {
      console.log(`Closing the socket forcefully 3s after graceful LEAVE`);
      socket.close(1000); // 정상 종료 코드 1000
    }, 50 * 1000);

    socket.on("close", function () {
      console.log(`VU ${__VU}: disconnected`);
    });
  });

  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}

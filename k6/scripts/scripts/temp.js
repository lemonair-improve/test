import {
  randomString,
  randomIntBetween,
} from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import ws from "k6/ws";
import { check, sleep } from "k6";
import { Trend } from "k6/metrics";
const sessionDuration = randomIntBetween(10000, 60000); // user session between 10s and 1m
const chatRoomName = "testRoom"; // choose your chat room name
const ip = "chat.lemonair.me";
const port = "8082";
const sendReceiveInterval = new Trend("send_receive_interval", true);
export const options = {
  vus: 10,
  iterations: 10,
  // thresholds: {
  //   sendReceiveInterval: ["p(95) < 200"],
  // },
};
export default function () {
  const url = `wss://${ip}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };
  const sendMessage = randomString(10);
  let sendTime;
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);
      sendTime = new Date().getTime(); // 시작 시간 기록
      socket.send(sendMessage);
      // socket.setInterval(
      //   function timeout() {
      //     startTime = new Date().getTime(); // 시작 시간 기록
      //     socket.send(sendMessage);
      //   },
      //   randomIntBetween(2000, 8000)
      // ); // say something every 2-8seconds
    });
    socket.on("close", function () {
      console.log(`VU ${__VU}: disconnected`);
    });
    socket.on("message", function (receiveMessage) {
      //   const msg = JSON.parse(message);
      if (receiveMessage.startsWith(`VU${__VU}`)) {
        console.log(receiveMessage);
        const receiveTime = new Date().getTime(); // 메시지를 받은 시간 기록
        const roundTripTime = receiveTime - sendTime; // 메시지 왕복 시간 계산
        sendReceiveInterval.add(roundTripTime); // 사용자 정의 지표에 왕복 시간 추가
      }
      //   if (msg.event === "CHAT_MSG") {
      //     console.log(`VU ${__VU} received: ${msg.user} says: ${msg.message}`);
      //   } else if (msg.event === "ERROR") {
      //     console.error(`VU ${__VU} received:: ${msg.message}`);
      //   } else {
      //     console.log(`VU ${__VU} received unhandled message: ${msg.message}`);
      //   }
    });
    socket.setTimeout(function () {
      console.log(`VU ${__VU}: ${sessionDuration}ms passed, leaving the chat`);
      socket.send(JSON.stringify({ event: "LEAVE" }));
    }, sessionDuration);
    socket.setTimeout(function () {
      console.log(`Closing the socket forcefully 3s after graceful LEAVE`);
      socket.close();
    }, sessionDuration + 3000);
  });
  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}

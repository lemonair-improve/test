import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import ws from "k6/ws";
import { check } from "k6";
import { Trend } from "k6/metrics";

const ip = "192.168.45.48";
const port = "8082";
const chatRoomName = "testRoom";
const sendReceiveInterval = new Trend("send_receive_interval", true);

export const options = {
  vus: 1,
  duration: "5s",
};

export default function () {
  const url = local
    ? `ws://192.168.1.106:8082/chat/test/VU${__VU}`
    : `wss://${ip}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };

  const sendMessage = randomString(10);
  let sendTime;
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);

      sendTime = new Date().getTime(); // 시작 시간 기록
      socket.send(sendMessage);
    });

    socket.on("message", function (receiveMessage) {
      if (receiveMessage.startsWith(`VU${__VU}`)) {
        console.log(receiveMessage);
        const receiveTime = new Date().getTime(); // 메시지를 받은 시간 기록
        console.log("sendtime: ", sendTime);
        console.log("receiveTime: ", receiveTime);

        const roundTripTime = receiveTime - sendTime; // 메시지 왕복 시간 계산
        console.log("rtt : " + roundTripTime);
        sendReceiveInterval.add(roundTripTime); // 사용자 정의 지표에 왕복 시간 추가
        socket.close();
      }
    });

    socket.on("close", function () {
      console.log(`VU ${__VU}: disconnected`);
    });
  });

  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}

import ws from "k6/ws";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

const ip = "192.168.56.1";
const port = "8082";
const chatRoomName = "testRoom";
const messageReceiveCounter = new Counter("message_receive_counter");

export const options = {
  stages: [
    { duration: '10m', target: 2000 },
    { duration: '20m', target: 2000 },
    { duration: '10m', target: 0 },
  ],
};

export default function () {
  const url = `ws://${ip}:${port}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", () => {
      console.log(`VU ${__VU} connected`);
      sendChat(socket); // Open 시에 바로 채팅을 보내도록 호출
    });

    socket.on("message", (data) => {
      console.log(data);
      messageReceiveCounter.add(1);
    });

    socket.on("close", () => console.log(`User ${__VU} disconnected`));
  });
  check(res, { "status is 101": (r) => r && r.status === 101 });
}

function sendChat(socket) {
  const interval = 100;
  for (let i = 0; i < chatMessagesToSend; i++) {
    socket.send(JSON.stringify({ message: `Chat message ${i + 1}` }));
    sleep(interval);
  }
}
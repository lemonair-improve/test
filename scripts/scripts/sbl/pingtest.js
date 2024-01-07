import ws from "k6/ws";
import { check } from "k6";
import { Counter } from "k6/metrics";

export const options = {
  vus: 1,
  iterations: 1,
};

const ip = "chat.lemonair.me";
const port = "8082";
const chatRoomName = "testRoom";
const messageReceiveCounter = new Counter("message_receive_counter");

export default function () {
  const url = local
    ? `ws://192.168.1.106:8082/chat/test/VU${__VU}`
    : `wss://${ip}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", () => {
      console.log(`VU ${__VU} connected`);
      socket.ping();
    });
    socket.on("pong", (data) => {
      console.log(data);
    });

    socket.on("message", (data) => {
      console.log(data);
      messageReceiveCounter.add(1);
    });

    socket.on("close", () => console.log(`User ${__VU} disconnected`));
  });
  check(res, { "status is 101": (r) => r && r.status === 101 });
}

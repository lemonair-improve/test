import ws from "k6/ws";
import { check } from "k6";
import { Counter } from "k6/metrics";

export const options = {
  stages: [
    { target: 1, duration: "1s" },
    { target: 1, duration: "2m" },
  ],
};

const ip = "192.168.1.106";
const port = "8082";
const chatRoomName = "testRoom";
const messageReceiveCounter = new Counter("message_receive_counter");

export default function () {
  const url = `ws://${ip}:${port}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", () => {
      console.log(`VU ${__VU} connected`);
    });

    socket.on("message", (data) => {
      console.log(data);
      messageReceiveCounter.add(1);
    });

    socket.on("close", () => console.log(`User ${__VU} disconnected`));
  });
  check(res, { "status is 101": (r) => r && r.status === 101 });
}

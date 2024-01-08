import ws from "k6/ws";
import { check } from "k6";
import { Counter } from "k6/metrics";

const vus = 11000;
export const options = {
  stages: [
    { target: vus, duration: "5m" },
    { target: vus, duration: "5m" },
  ],
};
let local = true;

const messageReceiveCounter = new Counter("message_receive_counter");

const protocol = local ? "ws" : "wss";
const host = local ? "192.168.128.1:8082" : "chat.lemonair.me";
const roomId = "testRoom2";

export default function () {
  const url = `${protocol}://${host}/chat/${roomId}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", () => {
      console.log(`VU ${__VU} connected`);
    });

    socket.on("message", (data) => {
      // console.log(data);
      messageReceiveCounter.add(1);
    });

    socket.on("close", () => console.log(`User ${__VU} disconnected`));
  });
  check(res, { "status is 101": (r) => r && r.status === 101 });
}

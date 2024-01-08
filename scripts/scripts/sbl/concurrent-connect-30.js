import ws from "k6/ws";
import { check } from "k6";
import { Counter } from "k6/metrics";

export const options = {
  vus: 30,
  iterations: 30,
};

const local = false;
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
      console.log(data);
      messageReceiveCounter.add(1);
    });

    socket.on("close", () => console.log(`User ${__VU} disconnected`));
  });
  check(res, { "status is 101": (r) => r && r.status === 101 });
}

import ws from "k6/ws";
import { check } from "k6";
const ip = "chat.lemonair.me";
const port = "8082";
export default function () {
  const url = `wss://${ip}/chat/test/test`;
  const params = { tags: { my_tag: "hello" } };
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", () => console.log("connected"));
    socket.on("message", (data) => console.log("Message received: ", data));
    socket.on("close", () => console.log("disconnected"));
  });
  check(res, { "status is 101": (r) => r && r.status === 101 });
}

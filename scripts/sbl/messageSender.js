import ws from "k6/ws";
import { check } from "k6";

const ip = "192.168.1.104";
const port = "8082";
const chatRoomName = "testRoom";
export const options = {
  vus: 100,
  duration: "20s",
};

export default function () {
  const url = `ws://${ip}:${port}/chat/${chatRoomName}/VU_Sender_${+__VU}`;
  const params = { tags: { my_tag: "my ws session" } };

  let sendIndex = 1;
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);
      socket.setInterval(function () {
        socket.send(__VU + "의 " + sendIndex++ + "번째 메세지 ");
      }, 200);
    });

    socket.on("close", function () {
      console.log(`VU ${__VU}: disconnected`);
    });
  });

  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}

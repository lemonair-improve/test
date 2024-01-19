import ws from "k6/ws";
import { check, sleep } from "k6";

export const options = {
  vus: 5,
  iterations: 5,
};

const ip = "chat.lemonair.me";
const port = "8082";
const chatRoomName = "testRoom";

export default function () {
  const url = `wss://${ip}/chat/${chatRoomName}/VU_Sender_${+__VU}`;
  const params = { tags: { my_tag: "my ws session" } };

  let sendIndex = 1;
  let messageCount = 10;
  console.log("connect 전");
  console.log(url);
  const res = ws.connect(url, params, function (socket) {
    console.log("open 전");
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);
      socket.setInterval(function () {
        socket.send(__VU + "의 " + sendIndex++ + "번째 메세지 ");
        if (sendIndex > messageCount) {
          sleep(1);
          socket.close();
        }
      }, 1000);
    });

    socket.on("close", function () {
      console.log(`VU ${__VU}: disconnected`);
    });
  });

  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}

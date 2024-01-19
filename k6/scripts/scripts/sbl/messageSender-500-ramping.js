import ws from "k6/ws";
import { check, sleep } from "k6";

const ip = "chat.lemonair.me";
const port = "8082";
const chatRoomName = "testRoom";
const vus = 500;
export const options = {
  stages: [
    { duration: "15s", target: vus }, // Slowly ramp up to 2000 VUs over 15 seconds
    { duration: "1m", target: vus }, // Stay at 2000 VUs for 1 minute
  ],
};

export default function () {
  const url = `wss://${ip}/chat/${chatRoomName}/VU_Sender_${+__VU}`;
  const params = { tags: { my_tag: "my ws session" } };

  let sendIndex = 1;
  let messageCount = 50;
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);
      socket.setInterval(function () {
        socket.send(__VU + "의 " + sendIndex++ + "번째 메세지 ");
        if (sendIndex > messageCount) {
          sleep(1);
          socket.close();
        }
      }, 500);
    });

    socket.on("close", function () {
      console.log(`VU ${__VU}: disconnected`);
    });
  });

  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}

import ws from "k6/ws";
import { check, sleep } from "k6";

import { getCurrentStageIndex } from "https://jslib.k6.io/k6-utils/1.4.0/index.js";

const vus = 100;
export const options = {
  vus: vus,
  iterations: vus,
};
const local = false;

const protocol = local ? "ws" : "wss";
const host = local ? "192.168.128.1:8082" : "chat.lemonair.me";
const roomId = "testRoom2";

export default function () {
  const url = `${protocol}://${host}/chat/${roomId}/VU${__VU}`;
  const params = { tags: { my_tag: "my ws session" } };

  let sendIndex = 1;
  let messageCount = 50;
  const res = ws.connect(url, params, function (socket) {
    socket.on("open", function open() {
      console.log(`VU ${__VU}: connected`);
      socket.setInterval(function () {
        socket.send(__VU + "의 " + sendIndex++ + "번째 메세지 ");
        if (sendIndex > messageCount) {
          sleep(1000000);
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

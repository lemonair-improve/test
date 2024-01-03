import ws from 'k6/ws';
import { check } from 'k6';
import { Counter } from 'k6/metrics';

const ip = '192.168.45.48';
const port = '8082';
const chatRoomName = 'testRoom';
const messageReceiveCounter = new Counter('message_receive_counter');

const userCount = 2000;

export const options = {
  vus: userCount,
  duration: '20s',
  iterations: userCount,
};

const maxRetries = 3;
const retryInterval = 2;

export default function () {
  //   let connected = false;
  //   let retries = 0;

  //   while (!connected && retries < maxRetries) {
  const url = `ws://${ip}:${port}/chat/${chatRoomName}/VU${__VU}`;
  const params = { tags: { my_tag: 'my ws session' } };

  // const connectedUsers = [];
  let sendTime;

  const res = ws.connect(url, params, function (socket) {
    socket.on('open', () => {
      console.log(`VU ${__VU} connected`);
      // connectedUsers.push(socket);
      // currentCount.add(1);

      // if (connectedUsers.length === userCount) {
      //   console.log('2000명 접속 완료');
      //   sendTime = new Date().getTime();
      //   connectedUsers[0].send(
      //     __VU + `: 소켓연결 2천명 접속완료 메세지 발송`
      //   );
      // }
    });

    socket.on('message', (data) => {
      console.log(data);
      // const receiveTime = new Date().getTime();
      // console.log('sendtime: ', sendTime);
      // console.log('receiveTime: ', receiveTime);
      // const roundTripTime = receiveTime - sendTime;
      // console.log('rtt : ' + roundTripTime);
      // sendReceiveInterval.add(roundTripTime);
      messageReceiveCounter.add(1);

      // if (connectedUsers.length >= userCount) {
      //   connectedUsers.forEach((socket) => socket.close());
      // }
      socket.close();
    });

    socket.on('close', () => console.log(`User ${__VU} disconnected`));
  });

  check(res, { 'status is 101': (r) => r && r.status === 101 });

  // retries++;
  // if (!connected) {
  //   console.log(`${retryInterval}초 후 재연결합니다.`);
  //   const nextIterationTime = Date.now() + retryInterval * 1000;
  //   while (Date.now() < nextIterationTime) {}
  // }
  //   }
}

import ws from 'k6/ws';
import { check } from 'k6';
import { Trend } from 'k6/metrics';
import { Counter } from 'k6/metrics';

const ip = '192.168.45.48';
const port = '8082';
const chatRoomName = 'testRoom';
const sendReceiveInterval = new Trend('send_receive_interval', true);
const messageReceiveCounter = new Counter('message_receive_counter');

export const options = {
  executor: 'constant-arrival-rate',
  vus: 1000,
  duration: '90s',
  iterations: 1000,
  rate: 50,
};

const maxRetries = 3;
const retryInterval = 2;

export default function () {
  let connected = false;
  let retries = 0;

  while (!connected && retries < maxRetries) {
    const url = `ws://${ip}:${port}/chat/${chatRoomName}/VU${__VU}`;
    const params = { tags: { my_tag: 'my ws session' } };

    let sendTime;
    const res = ws.connect(url, params, function (socket) {
      socket.on('open', function open() {
        console.log(`VU ${__VU}: connected`);
        connected = true;
        sendTime = new Date().getTime(); // 시작 시간 기록
        socket.send(__VU + ': abcdefghijklmn');
      });

      socket.on('message', function (receiveMessage) {
        if (receiveMessage.startsWith(`VU${__VU}`)) {
          console.log(receiveMessage);
          const receiveTime = new Date().getTime(); // 메시지를 받은 시간 기록
          console.log('sendtime: ', sendTime);
          console.log('receiveTime: ', receiveTime);
          const roundTripTime = receiveTime - sendTime; // 메시지 왕복 시간 계산
          console.log('rtt : ' + roundTripTime);
          sendReceiveInterval.add(roundTripTime); // 사용자 정의 지표에 왕복 시간 추가
          messageReceiveCounter.add(1);
          socket.close();
        }
      });

      socket.on('close', function () {
        console.log(`VU ${__VU}: disconnected`);
        connected = false;
        return;
      });

      socket.setTimeout(function () {
        console.log(`Closing the socket forcefully 3s after graceful LEAVE`);
        socket.close();
      }, 30000);
    });

    check(res, { 'Connected successfully': (r) => r && r.status === 101 });

    retries++;
    if (!connected) {
      console.log(`${retryInterval}초 후 재연결합니다.`);
      const nextIterationTime = Date.now() + retryInterval * 1000;
      while (Date.now() < nextIterationTime) {}
    }
  }
}

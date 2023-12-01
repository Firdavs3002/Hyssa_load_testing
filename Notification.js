import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // 10 requests per second for 10 seconds
    { duration: '15s', target: 15 }, // 15 requests per second for 15 seconds
  ],
};

export default function () {
  const getNotificationStatusRequest = http.get('https://api.hyssa.capital/get-notification-status/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Notification Status Request status: ${getNotificationStatusRequest.status}`);

  const getInvestorNotificationRequest = http.get('https://api.hyssa.capital/notification/investor/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Notification Request status: ${getInvestorNotificationRequest.status}`);

  sleep(1);
}

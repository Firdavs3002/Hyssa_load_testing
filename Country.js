import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // 10 requests per second for 10 seconds
    { duration: '15s', target: 15 }, // 15 requests per second for 15 seconds
  ],
};

export default function () {
  const getCountryRequest = http.get('https://api.hyssa.capital/country');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Country Request status: ${getCountryRequest.status}`);

  sleep(1);
}

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 5 },
    { duration: '1s', target: 10 },
    { duration: '1s', target: 15 },
  ],
};

export default function () {
  const updateStatusResponse = http.put('https://api.hyssa.capital/investor/update-status/001Q5000006Q1N0IAK?status=Failed', {});
  console.log(`VU=${__VU} ITER=${__ITER} - Update Status Response status: ${updateStatusResponse.status}`);

  sleep(1);
}

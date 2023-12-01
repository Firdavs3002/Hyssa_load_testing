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
  const postResponse = http.post('https://api.hyssa.capital/kyc/create-sumsub-status?investor_id=001Q5000006Q1N0IAK&status=Success', {});
  console.log(`VU=${__VU} ITER=${__ITER} - POST Response status: ${postResponse.status}`);

  const getResponse = http.get('https://api.hyssa.capital/kyc/get-sumsub-status?investor_id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Response status: ${getResponse.status}`);

  const putResponse = http.put('https://api.hyssa.capital/kyc/update-sumsub-status?investor_id=001Q5000006Q1N0IAK&status=Pending', {});
  console.log(`VU=${__VU} ITER=${__ITER} - PUT Response status: ${putResponse.status}`);

  sleep(1);
}

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getKycStatusRequest = http.get('https://api.hyssa.capital/investor/kyc/status?investor-id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET KYC Status Request status: ${getKycStatusRequest.status}`);

  const getRegistrationStepRequest = http.get('https://api.hyssa.capital/investor/registration-step/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Registration Step Request status: ${getRegistrationStepRequest.status}`);

  sleep(1);
}

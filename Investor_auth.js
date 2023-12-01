import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const putAuthenticateRequest = http.put('https://api.hyssa.capital/investor/authenticate?id=001Q5000006YcVdIAK&two_fa=true', {});
  console.log(`VU=${__VU} ITER=${__ITER} - PUT Authenticate Request status: ${putAuthenticateRequest.status}`);

  const getAuthenticateRequest = http.get('https://api.hyssa.capital/investor/authenticate/001Q5000006YcVdIAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Authenticate Request status: ${getAuthenticateRequest.status}`);

  const getFaqsRequest = http.get('https://api.hyssa.capital/integrations/salesforce/faqs/a2S8d000000MFgnEAG');
  console.log(`VU=${__VU} ITER=${__ITER} - GET FAQs Request status: ${getFaqsRequest.status}`);

  sleep(1);
}

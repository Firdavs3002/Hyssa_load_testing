import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 5 }, // 5 requests per second for 5 seconds
    { duration: '10s', target: 10 }, // 10 requests per second for 10 seconds
    { duration: '15s', target: 15 }, // 15 requests per second for 15 seconds
  ],
};

export default function () {
  const getInvestorDataRequest = http.get('https://api.hyssa.capital/investor/data/0018d00000iqaB8AAI?MyId=0018d00000iqOa4AAE');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Data Request status: ${getInvestorDataRequest.status}`);

  const getInvestorSearchRequest = http.get('https://api.hyssa.capital/investor/search/faz');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Search Request status: ${getInvestorSearchRequest.status}`);

  const getUserSearchRequest = http.get('https://api.hyssa.capital/user/search/bey');
  console.log(`VU=${__VU} ITER=${__ITER} - GET User Search Request status: ${getUserSearchRequest.status}`);

  sleep(1);
}

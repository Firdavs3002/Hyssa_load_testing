import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getBankAccountRequest1 = http.get('https://api.hyssa.capital/bank-account?investor_id=0018d00000iqOa4AAE&currency=USD');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Bank Account Request 1 status: ${getBankAccountRequest1.status}`);

  const getInvestorBankAccountRequest1 = http.get('https://api.hyssa.capital/investor/bank-account/?investorId=0018d00000iqOa4AAE');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Bank Account Request 1 status: ${getInvestorBankAccountRequest1.status}`);

  const postInvestorBankAccountRequest = http.post('https://api.hyssa.capital/investor/bank-account/?investorId=0018d00000iqOa4AAE', {});
  console.log(`VU=${__VU} ITER=${__ITER} - POST Investor Bank Account Request status: ${postInvestorBankAccountRequest.status}`);

  const getInvestorBankAccountRequest2 = http.get('https://api.hyssa.capital/investor/bank-account/a1qQ50000003qTV?investorId=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Bank Account Request 2 status: ${getInvestorBankAccountRequest2.status}`);

  sleep(1);
}

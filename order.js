import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 5 }, // 5 requests in 1 second
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getInvestorPortfolioRequest = http.get('https://api.hyssa.capital/investor/portfolio/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Portfolio Request status: ${getInvestorPortfolioRequest.status}`);

  const getPurchasedStockRequest = http.get('https://api.hyssa.capital/investor/purchased-stock/?investor_id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Purchased Stock Request status: ${getPurchasedStockRequest.status}`);

  sleep(1);
}

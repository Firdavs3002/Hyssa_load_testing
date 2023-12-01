import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // 10 requests per second for 10 seconds
    { duration: '15s', target: 15 }, // 15 requests per second for 15 seconds
  ],
};

export default function () {
  const getDocumentsRequest = http.get('https://api.hyssa.capital/investor/documents?investor-id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Documents Request status: ${getDocumentsRequest.status}`);

  const getFirstPostRequest = http.get('https://api.hyssa.capital/investor/first-post/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET First Post Request status: ${getFirstPostRequest.status}`);

  const getInvestorStockRequest = http.get('https://api.hyssa.capital/investor/investor-stock/001Q5000006Q1N0IAK/AAPL.NASDAQ');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Stock Request status: ${getInvestorStockRequest.status}`);

  const getLastCheckedRequest = http.get('https://api.hyssa.capital/investor/last-checked?investor-id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Last Checked Request status: ${getLastCheckedRequest.status}`);

  const getRestrictionsRequest = http.get('https://api.hyssa.capital/investor/restrictions?investor-id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Restrictions Request status: ${getRestrictionsRequest.status}`);

  const getStatusRequest = http.get('https://api.hyssa.capital/investor/status/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Status Request status: ${getStatusRequest.status}`);

  const getInvestorRequest = http.get('https://api.hyssa.capital/investor/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Request status: ${getInvestorRequest.status}`);

  const getFavoriteStocksRequest = http.get('https://api.hyssa.capital/urite-stocks?investor-id=001Q5000006YcVdIAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Favorite Stocks Request status: ${getFavoriteStocksRequest.status}`);

  sleep(1);
}

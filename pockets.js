import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getAllBalanceGrowthPercentageRequest = http.get('https://api.hyssa.capital/investor/all-balance-growth-percentage?user_id=001Q5000006Q1N0IAK&currency=USD');
  console.log(`VU=${__VU} ITER=${__ITER} - GET All Balance Growth Percentage Request status: ${getAllBalanceGrowthPercentageRequest.status}`);

  const getBalanceAssetsChartRequest = http.get('https://api.hyssa.capital/investor/balance-assets-chart?user_id=001Q5000006Q1N0IAK&currency=USD&type=currency');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Balance Assets Chart Request status: ${getBalanceAssetsChartRequest.status}`);

  const getBalanceGrowthPercentageRequest = http.get('https://api.hyssa.capital/investor/balance-growth-percentage?user_id=001Q5000006Q1N0IAK&currency=usd&period=d');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Balance Growth Percentage Request status: ${getBalanceGrowthPercentageRequest.status}`);

  const getBalanceStatisticsByPeriodRequest = http.get('https://api.hyssa.capital/investor/balance-statistics-by-period?user_id=001Q5000006Q1N0IAK&period=d&currency=usd');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Balance Statistics By Period Request status: ${getBalanceStatisticsByPeriodRequest.status}`);

  const getPocketRequest = http.get('https://api.hyssa.capital/pocket?user_id=001Q5000006Q1N0IAK&requested-currency=usd');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Pocket Request status: ${getPocketRequest.status}`);

  const getPocketCurrenciesRequest = http.get('https://api.hyssa.capital/pocket/currencies');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Pocket Currencies Request status: ${getPocketCurrenciesRequest.status}`);

  const getPocketOperationsRequest = http.get('https://api.hyssa.capital/pocket/operations');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Pocket Operations Request status: ${getPocketOperationsRequest.status}`);

  const getPocketBKWRequest = http.get('https://api.hyssa.capital/pocket/BKW32358?user-id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Pocket BKW Request status: ${getPocketBKWRequest.status}`);

  sleep(1);
}

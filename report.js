import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 5 }, // 5 requests in 1 second
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getPortfolioReportRequest = http.get('https://api.hyssa.capital/portfolio-report?region_id=a27Q5000001Mil1IAC');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Portfolio Report Request status: ${getPortfolioReportRequest.status}`);

  sleep(1);
}

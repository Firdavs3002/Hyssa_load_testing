import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getInstrumentAlertRequest1 = http.get('https://api.hyssa.capital/investor/instrument-alert/001Q5000006Q1N0IAK?stockId=AAPL.NASDAQ');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Instrument Alert Request 1 status: ${getInstrumentAlertRequest1.status}`);

  const getInstrumentAlertRequest2 = http.get('https://api.hyssa.capital/investor/instrument-alert/001Q5000006Q1N0IAK/8a8476d5-a71a-4882-b3db-cf8076db603a');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Instrument Alert Request 2 status: ${getInstrumentAlertRequest2.status}`);

  const getInstrumentAlertsRequest = http.get('https://api.hyssa.capital/investor/instrument-alerts/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Instrument Alerts Request status: ${getInstrumentAlertsRequest.status}`);

  const getInvestorInvoiceRequest = http.get('https://api.hyssa.capital/investor/investor-invoice/001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Investor Invoice Request status: ${getInvestorInvoiceRequest.status}`);

  sleep(1);
}

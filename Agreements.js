import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getAgreementByRegionsRequest = http.get('https://api.hyssa.capital/integrations/salesforce/agreement-by-regions?account_id=001Q5000006Q1N0IAK&language=ENGLISH');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Agreement By Regions Request status: ${getAgreementByRegionsRequest.status}`);

  const checkAgreementsRequest = http.get('https://api.hyssa.capital/integrations/salesforce/check-agreements?account_id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Check Agreements Request status: ${checkAgreementsRequest.status}`);

  const getGeneralAgreementRequest = http.get('https://api.hyssa.capital/integrations/salesforce/get-general-ageement?account_id=001Q5000006Q1N0IAK&language=a2S8d000000MFgnEAG');
  console.log(`VU=${__VU} ITER=${__ITER} - GET General Agreement Request status: ${getGeneralAgreementRequest.status}`);

  sleep(1);
}

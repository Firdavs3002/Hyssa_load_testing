import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 },
  ],
};

export default function () {
  const getLanguageRequest1 = http.get('https://api.hyssa.capital/investor/language/a2S8d000000MFgnEAG');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Language Request 1 status: ${getLanguageRequest1.status}`);

  const getLanguagesRequest = http.get('https://api.hyssa.capital/investor/languages?user_id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Languages Request status: ${getLanguagesRequest.status}`);

  sleep(1);
}

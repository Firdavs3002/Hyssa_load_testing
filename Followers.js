import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getFollowersRequest = http.get('https://api.hyssa.capital/investor/followers/001Q5000006YcVdIAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Followers Request status: ${getFollowersRequest.status}`);

  const getFollowingRequest = http.get('https://api.hyssa.capital/investor/following/001Q5000006YcVdIAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Following Request status: ${getFollowingRequest.status}`);

  sleep(1);
}

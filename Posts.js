import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 15 }, // 15 requests in 1 second
  ],
};

export default function () {
  const getRequest1 = http.get('https://api.hyssa.capital/investor/post?InvestorId=001Q5000006Q1N0IAK&IsOwnerId=false&Following=true&language=a2S8d000000MFgnEAG&page=1&limit=100');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Request 1 status: ${getRequest1.status}`);

  const postRequest = http.post('https://api.hyssa.capital/investor/post?investorId=001Q5000006Q1N0IAK', {});
  console.log(`VU=${__VU} ITER=${__ITER} - POST Request status: ${postRequest.status}`);

  const getRequest2 = http.get('https://api.hyssa.capital/investor/post/a1tQ5000001kbC5IAI?investorId=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Request 2 status: ${getRequest2.status}`);

  const putRequest = http.put('https://api.hyssa.capital/investor/post/a1tQ5000001kbK9IAI?investorId=001Q5000006Q1N0IAK', {});
  console.log(`VU=${__VU} ITER=${__ITER} - PUT Request status: ${putRequest.status}`);

  const postCommentRequest = http.post('https://api.hyssa.capital/investor/post/a1tQ5000001kbK9IAI/comment?investorId=001Q5000006Q1N0IAK', {});
  console.log(`VU=${__VU} ITER=${__ITER} - POST Comment Request status: ${postCommentRequest.status}`);

  const getCommentListRequest = http.get('https://api.hyssa.capital/investor/post/a1tQ5000001kbK9IAI/comment/');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Comment List Request status: ${getCommentListRequest.status}`);

  const getCommentRequest = http.get('https://api.hyssa.capital/investor/post/a1tQ5000001kbC5IAI%20/comment/a1rQ5000004W4fpIAC');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Comment Request status: ${getCommentRequest.status}`);

  const getLikeRequest = http.get('https://api.hyssa.capital/investor/post/a1tQ5000001kbK9IAI/like');
  console.log(`VU=${__VU} ITER=${__ITER} - GET Like Request status: ${getLikeRequest.status}`);

  sleep(1);
}

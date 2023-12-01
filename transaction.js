import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '30s', target: 10 },
    { duration: '30s', target: 15 },
    { duration: '30s', target: 20 },
  ],
};

export default function () {
  const transactionListResponse = http.get('https://api.hyssa.capital/pocket/3646/transaction?user_id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - Transaction List Response status: ${transactionListResponse.status}`);

  const specificTransactionId = 'your_transaction_id_here';
  const specificTransactionResponse = http.get(`https://api.hyssa.capital/pocket/37096/transaction/${specificTransactionId}`);
  console.log(`VU=${__VU} ITER=${__ITER} - Specific Transaction Response status: ${specificTransactionResponse.status}`);

  const v2TransactionListResponse = http.get('https://api.hyssa.capital/v2/transaction?user_id=001Q5000006Q1N0IAK');
  console.log(`VU=${__VU} ITER=${__ITER} - V2 Transaction List Response status: ${v2TransactionListResponse.status}`);

  sleep(1);
}

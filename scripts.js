// Time -> O(nlogn) | Space -> O(1)
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let shortestWaitingTime = 0;
  let sum = 0;
  for (let i = 1; i < queries.length; i++) {
    sum += queries[i - 1];
    shortestWaitingTime += sum;
  }
  return shortestWaitingTime;
}

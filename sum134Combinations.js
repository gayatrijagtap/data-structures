const sum134Combinations = function(n) {
  let sumStore = new Array();
  sumStore[0] = 1;
  sumStore[1] = 1;
  sumStore[2] = 1;
  sumStore[3] = 2;
  for (let i = 4; i <= n; i++) {
    sumStore[i] = sumStore[i - 1] + sumStore[i - 3] + sumStore[i - 4];
  }
  return sumStore[n];
};

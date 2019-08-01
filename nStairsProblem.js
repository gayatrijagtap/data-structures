const nStairs = function(n) {
  let stairsStore = new Array();
  stairsStore[0] = 1;
  stairsStore[1] = 1;
  stairsStore[2] = 2;
  for (let i = 3; i <= n; i++) {
    stairsStore[i] = stairsStore[i - 1] + stairsStore[i - 2];
  }
  return stairsStore[n];
};

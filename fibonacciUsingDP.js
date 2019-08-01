const fibo = function(n) {
  let fiboStore = new Array();
  fiboStore[0] = 0;
  fiboStore[1] = 1;
  for (let i = 2; i <= n; i++) {
    fiboStore[i] = fiboStore[i - 1] + fiboStore[i - 2];
  }
  return fiboStore[n];
};

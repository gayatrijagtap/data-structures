const sortStack = function() {
  let stack = new Array(3, 1, 7, 2, 0, 5);
  let sortedStack = new Array();
  while (stack.length) {
    if (!sortedStack.length) {
      sortedStack.push(stack.pop());
    } else {
      let temp = stack.pop();
      while (sortedStack.length && sortedStack[sortedStack.length - 1] > temp) {
        stack.push(sortedStack.pop());
      }
      sortedStack.push(temp);
    }
  }
  return sortedStack;
};

const arrayPallindromeRecursive = function(array, start, end) {
  if (start >= end) {
    return true;
  }
  if (array[start] == array[end]) {
    return arrayPallindromeRecursive(array, start + 1, end - 1);
  }
  return false;
};

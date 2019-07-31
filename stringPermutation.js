const stringPermutation = function(str1, str2) {
  let count = new Array(26).fill(0);
  if (str1.length != str2.length) {
    return false;
  }
  for (let iterator = 0; iterator < str1.length; iterator++) {
    count[str1.charCodeAt(iterator) - "a".charCodeAt(0)]++;
  }
  for (let iterator = 0; iterator < str2.length; iterator++) {
    count[str2.charCodeAt(iterator) - "a".charCodeAt(0)]--;
    if (count[str2.charCodeAt(iterator) - "a".charCodeAt(0)] < 0) {
      return false;
    }
  }
  return true;
};

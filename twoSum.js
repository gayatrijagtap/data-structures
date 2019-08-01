const twoSum = function(nums, target) {
  let storage = new Object();
  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (storage[value] == undefined) {
      storage[nums[i]] = i;
    } else {
      return [storage[value], i];
    }
  }
};

const plusOne = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i]++;
    if (nums[i] > 9) {
      nums[i] = 0;
    } else {
      return nums;
    }
  }
  nums.unshift(1);
  return nums;
};

console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([1, 2, 9]));

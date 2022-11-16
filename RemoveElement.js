let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.push(nums.splice(nums.indexOf(nums[i]), 1).pop());
    }
  }
  console.log(nums);

  const k = nums.filter((num) => num !== val).length;
  return nums, k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));

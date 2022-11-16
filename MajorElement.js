const majorElement = function (nums) {
  const obj = {};
  for (let num of nums) {
    obj[num] = obj[num] + 1 || 1;
    if (obj[num] > nums.length / 2) return num;
  }
};

console.log(majorElement([2, 1, 2, 2, 2, 1, 1]));
console.log(majorElement([3, 2, 3]));

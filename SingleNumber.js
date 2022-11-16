const singleNum = function (nums) {
  for (let num of nums) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      return num;
    }
  }
};

console.log(singleNum([2, 2, 1]));
console.log(singleNum([4, 1, 2, 1, 2]));

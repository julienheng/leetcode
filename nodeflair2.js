const yourFunction = function (str1, str2, num) {
  // check for invalid input
  if (str1.length === "" || str2.length === "") return false;
  // check each string and get a count of number of letter in each
  const obj = {};
  const obj2 = {};
  for (let i of str1) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let i of str2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }

  const arr = [];
  // compare the letter in both string
  for (let i in obj2) {
    if (i in obj && obj[i] >= num && obj2[i] >= num) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(yourFunction("ababbcdd", "baaabccc", 2));
console.log(yourFunction("juju", "juluin", 2));

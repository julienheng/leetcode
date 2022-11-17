// Write a function that takes in an array ["A", "B", "C"]
// Return the string "A says hi to B and C. B says hi to A and C. C says hi to A and B."

const sayHi = function (arr) {
  const result = [];
  for (const i in arr) {
    const tempArr = arr.map((x) => x);
    tempArr.splice(i, 1);
    result.push(`${arr[i]} says hi to ${tempArr.join(" and ")}.`);
  }
  return result.join(" ");
};

console.log(sayHi(["A", "B", "C"]));

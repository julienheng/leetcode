// Write a function that

// Takes in an array ["A", "B", "C"]
// Return the string "A says hi to B and C. B says hi to A and C. C says hi to A and B."

const sayHi = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    let first = `${arr[i]} says hi to `;
    let second;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        second = `${arr[j++]} and ${arr[j]}. `;
      }
    }

    str += first.concat(second);
  }
  return str;
};

console.log(sayHi(["A", "B", "C"]));

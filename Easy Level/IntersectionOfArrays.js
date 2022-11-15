const intersectOfArrays = function (num1, num2) {
  if (num1.length === 0 || num2.length === 0) return null;

  let frequency1 = new Map();
  for (let n of num1) {
    frequency1.set(n, (frequency1.get(n) || 0) + 1);
  }

  let unique = [];
  for (let n of num2) {
    if (frequency1.has(n)) {
      unique.push(n);
    }
  }
  return [...new Set(unique)];
};
console.log(intersectOfArrays([1, 2, 2, 1], [2, 2]));
console.log(intersectOfArrays([4, 9, 5], [9, 4, 9, 8, 4]));

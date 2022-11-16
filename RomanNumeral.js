let romannumeral = function (x) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let current = 0;
  let last = 0;
  let total = 0;

  x.split("")
    .reverse()
    .forEach((e) => {
      current = roman[e];
      if (current >= last) {
        total += current;
      } else {
        total -= current;
      }
      last = current;
    });
  return total;
};

console.log(romannumeral("MCMXCIV"));

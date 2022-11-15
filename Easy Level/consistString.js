const consistent = function (allowed, words) {
  let count = 0;
  for (let word of words) {
    let char = word.split("");
    if (char.every((n) => allowed.includes(n))) {
      count++;
    }
  }
  return count;
};

console.log(consistent("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(consistent("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));

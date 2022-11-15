const uncommonWord = function (s1, s2) {
  if (s1.length === "" || s2.length === "") return undefined;

  sentence = s1.split(" ").concat(s2.split(" "));

  let frequency = new Map();
  for (let n of sentence) {
    frequency.set(n, (frequency.get(n) || 0) + 1);
  }

  let uncommon = [];
  for (let [key, value] of frequency) {
    console.log(key);
    if (frequency.get(key) === 1) uncommon.push(key);
  }
  return uncommon;
};

console.log(uncommonWord("this apple is sweet", "this apple is sour"));
console.log(uncommonWord("apple apple", "banana"));

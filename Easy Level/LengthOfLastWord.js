let lastWord = function (s) {
  const word = s.trim().split(" ").reverse()[0].length;
  return word;
};

console.log(lastWord("Hello World"));
console.log(lastWord("   fly me   to   the moon  "));

const validParen = function (s) {
  // check for invalid input
  if (s === "") return false;

  // pair up the bracket
  const map = { "(": ")", "[": "]", "{": "}" };
  const bracket = [];

  // loop and check to see if they are pair up
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      bracket.push(s[i]);
    }
  }
};

console.log(validParen("()[]{}"));
console.log(validParen("(]"));

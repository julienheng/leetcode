const isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverseStr = str.split("").reverse().join("");

  const palindrome = str === reverseStr ? true : false;
  return palindrome;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

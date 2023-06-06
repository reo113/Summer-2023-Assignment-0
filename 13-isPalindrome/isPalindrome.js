function isPalindrome(word) {
  if (!word.length || word.length == 1) return true;
  if (word[0] === word.at(-1)) {
    return isPalindrome(word.slice(1, -1));
  } else {
    return false;
  }
}
console.log(isPalindrome("door"));
// Do not edit this line;
module.exports = isPalindrome;

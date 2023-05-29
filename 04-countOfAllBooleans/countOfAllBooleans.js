function countOfAllBooleans(arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true || arr[i] == false) {
      cnt++;
    }
  }
  return cnt;
}
const count = countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]);
console.log(count);
// Do not edit this line;
module.exports = countOfAllBooleans;
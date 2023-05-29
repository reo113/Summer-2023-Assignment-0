function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == i) {
      count++;
    }
  }
  return count;
}
const count = countOfAllIndexMatchingNumbers([0, 2, 3, 4, 4, 5, 77]);
console.log(count);
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
function sumOfAllOddNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      count++;
    }
  }
  return count;
}
const count = sumOfAllOddNumbers([2,4,6,7,8,9,10]);
console.log(count);
// Do not edit this line;
module.exports = sumOfAllOddNumbers;
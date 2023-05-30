function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }
  return min + max;
}
const num = sumOfMinimumAndMaximum([2, 4, 5, 6, 23]);
console.log(num);
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
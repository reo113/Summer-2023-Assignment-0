function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end) {
      count++;
    }
  }
  return count;
}
const count = sumOfNumsWithinARange([2, 4, 5, 6, 23], 2, 23);
console.log(count);
// Do not edit this line;
module.exports = sumOfNumsWithinARange;
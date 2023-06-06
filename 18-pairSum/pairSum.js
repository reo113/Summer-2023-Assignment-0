function pairSum(nums, target) {
  // Insert code here;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
console.log(pairSum([1,1],2));
// Do not edit this line;
module.exports = pairSum;

function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count =0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] < target){
        count++;
      }
  }
  return count;
}
const count = countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18);
console.log(count);
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
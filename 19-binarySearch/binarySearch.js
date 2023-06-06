class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] < target) {
        low = mid + 1;
        this.binarySearch(nums.slice(low,high+1),target);
        
      } else {
        high = mid - 1;
        this.binarySearch(nums.slice(low,high+1),target);
      }
    }
    return false;
   
  }
}
const x = new MySolution();
const b = x.binarySearch([1,2,3,4,5],5);
console.log(b);
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
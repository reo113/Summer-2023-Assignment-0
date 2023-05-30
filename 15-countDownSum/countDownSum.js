class MySolution {
  countDownSum(num) {
   return num + this.countDownSum(num-1);
  }
}
console.log(countDownSum(5));
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
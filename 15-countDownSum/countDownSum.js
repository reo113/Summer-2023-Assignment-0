class MySolution {
  countDownSum(num) {
    if (num < 1) return 0;
    return num + this.countDownSum(num - 1)
  }
}
let num = new MySolution();
const num1 = num.countDownSum(10);
console.log(num1);
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

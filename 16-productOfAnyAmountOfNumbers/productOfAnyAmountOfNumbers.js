function productOfAnyAmountOfNumbers(...args) {
  let total = 1;
  for (let i of args) {
    total *= i;
  }
  return total;
}
console.log(productOfAnyAmountOfNumbers(2,4,6));
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

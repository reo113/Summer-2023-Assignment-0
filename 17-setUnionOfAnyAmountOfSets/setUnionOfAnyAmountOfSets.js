function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();
  for (let i = 0; i < args.length; i++) {
    for (let elem of args[i]) {
      union.add(elem);
    }
  }
  return union;
}
const set1 = new Set([1, 2, 4]);
const set2 = new Set([4, 5, 6]);
const set3 = new Set([6, 7, 8]);
console.log(setUnionOfAnyAmountOfSets(set1, set2, set3));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

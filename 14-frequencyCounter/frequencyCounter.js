function frequencyCounter(word) {
  const obj = {};
  for (let i = 0; i < word.length; i++) {
    if (word[i] in obj) {
      obj[word[i]]++;
    } else {
      obj[word[i]] =1;
    }
  }
  return obj;
}
console.log(frequencyCounter("apple"))
// Do not edit this line;
module.exports = frequencyCounter;
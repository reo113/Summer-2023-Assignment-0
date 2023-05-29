function countOfAllBooleansAndStrings(arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true || arr[i] == false) {
      cnt++;
    } else if (typeof arr[i] == "string") {
      cnt++;
    }
  }
  return cnt;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
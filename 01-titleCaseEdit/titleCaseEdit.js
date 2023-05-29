function titleCaseEdit(title) {
  let titleArr = title.split(" ");
  title ="";
  for (let i = 0; i < titleArr.length; i++) {
    title += titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1) + " ";
    //console.log(title);
  }
  return title;
}
const capTitle = titleCaseEdit("fosters home for imaginary friends")
console.log(capTitle);
// Do not edit this line;
module.exports = titleCaseEdit;
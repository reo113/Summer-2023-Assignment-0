function titleCaseEdit(title) {
  console.log(title.length)
  let titleArr = title.split(" ");
  title ="";
  for (let i = 0; i < titleArr.length; i++) {
    title += titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1) + " ";
    //console.log(title);
  }
  
  return title.trim();
}
const capTitle = titleCaseEdit("fosters home for imaginary friends")
console.log(capTitle.length)
console.log(capTitle);
// Do not edit this line;
module.exports = titleCaseEdit;
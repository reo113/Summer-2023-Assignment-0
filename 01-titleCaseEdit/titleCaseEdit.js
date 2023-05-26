function titleCaseEdit(title) {
  let titleArr = title.split(" ");
  for (let i = 0; i < titleArr.length; i++) {
    titleArr[i] = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1);
   console.log(titleArr[i])
  }
}
titleCaseEdit("fosters home for imaginary friends")
  // Do not edit this line;
  module.exports = titleCaseEdit;
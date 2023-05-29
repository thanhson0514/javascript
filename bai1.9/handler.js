/**
 * Write a program that takes a string as input and returns the number of words in the string.
 * @param {string} str
 * @returns {number} the number of words in the string
 */
function handler(str) {
  const strSplit = str.split(" ");
  let count = 0;

  for (let i = 0; i < strSplit.length; ++i) {
    let check = false;
    for (let j = 0; j < strSplit[i].length; ++j) {
      let flag =
        strSplit[i][j].toLowerCase().charCodeAt() >= 97 &&
        strSplit[i][j].toLowerCase().charCodeAt() <= 122;

      check =
        flag ||
        (strSplit[i][j].charCodeAt() >= 48 &&
          strSplit[i][j].charCodeAt() <= 57) ||
        check;
    }
    count += +check;
  }

  return count;
}

module.exports = handler;

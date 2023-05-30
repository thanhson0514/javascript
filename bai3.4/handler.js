/**
 * Write a program that takes a list of strings as input and
 * returns the two strings with the largest overlap of characters.
 * @param {string[]} strs
 * @returns {string[]} the two strings with the largest overlap of characters
 */
function handler(strs) {
  if (strs.length < 2) return "The list required more than two elements";

  const strOverlapChar = new Array(2);
  let max = 0;

  for (let i = 0; i < strs.length; ++i) {
    for (let j = i + 1; j < strs.length; ++j) {
      let count = 0;
      for (let k = 0; k < strs[j].length; ++k) {
        if (strs[i].includes(strs[j][k])) {
          count++;
        }
      }

      if (count > max) {
        max = count;
        strOverlapChar[0] = strs[i];
        strOverlapChar[1] = strs[j];
      }
    }
  }

  return strOverlapChar;
}

module.exports = handler;

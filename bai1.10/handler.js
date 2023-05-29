/**
 * Write a program that takes a list of strings as input and
 * returns the number of strings that contain the letter 'a'.
 * @param {string[]} strs
 * @returns {number} the number of strings that contain the letter 'a'
 */
function handler(strs) {
  let count = 0;

  for (let i = 0; i < strs.length; ++i) {
    if (strs[i].includes("a")) count++;
  }

  return count;
}

module.exports = handler;

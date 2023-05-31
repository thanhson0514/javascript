const largestOverlapSubstring = require("./utils");

/**
 * Write a program that takes a list of strings as input and
 * returns the two strings with the largest overlap of substrings,
 * where the substrings must be at least k characters long
 * @param {string[]} strs
 * @param {number} k
 * @returns {number | string} the two strings with the largest overlap of substrings
 */
function handler(strs, k) {
  if (!strs.length) return "The list is empty";
  if (strs.length === 1) return "The list required two elements";

  let max = 0;
  let str1, str2;
  for (let i = 0; i < strs.length; ++i) {
    for (let j = i + 1; j < strs.length; ++j) {
      const maxLengthOverlap = largestOverlapSubstring(strs[i], strs[j]);
      maxLengthOverlap.sort((a, b) => b - a);
      console.log(maxLengthOverlap);
      maxLengthOverlap.forEach((item) => {
        if (max < item && item <= k) {
          max = maxLengthOverlap;
          str1 = strs[i];
          str2 = strs[j];
          return;
        }
      });
    }
  }
  console.log(str1, str2);
  return !str1 && !str2
    ? "Not two strings with the largest overlap of substrings"
    : [str1, str2];
}

module.exports = handler;

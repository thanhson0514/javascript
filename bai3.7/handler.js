/**
 * Write a program that takes a string as input and returns
 * the length of the longest palindrome that can be formed by rearranging the characters in the string.
 * @param {string} str
 * @returns {number}
 */
function handler(str) {
  str = str.split(" ").join("");

  let oddCount = 0;
  let map = {};

  for (let i = 0; i < str.length; ++i) {
    if (!map[str[i].toLowerCase()]) map[str[i].toLowerCase()] = 1;
    else map[str[i].toLowerCase()]++;

    if (map[str[i].toLowerCase()] % 2) oddCount++;
    else oddCount--;
  }

  return oddCount > 1 ? str.length - oddCount + 1 : str.length;
}

module.exports = handler;

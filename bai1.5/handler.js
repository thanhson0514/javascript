/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {string[]} strs
 * @returns {string} the shortest string in the list
 */
function handler(strs) {
  if (!strs.length) return "Not the shortest string in the list";
  let min = strs[0];

  for (let i = 1; i < strs.length; ++i)
    if (strs[i].length < min.length) min = strs[i];

  return min;
}

module.exports = handler;

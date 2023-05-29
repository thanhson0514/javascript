/**
 * Write a program that takes a list of strings as input and sorts the list in alphabetical order.
 * @param {string[]} strs
 * @returns {string[]} sorts the list in alphabetical order
 */
function handler(strs) {
  // O(n*m*k)
  for (let i = 0; i < strs.length; ++i) {
    for (let j = i + 1; j < strs.length; ++j) {
      const min = Math.min(strs[i].length, strs[j].length);
      let k = 0;
      let flag = false;
      const temp = strs[i];

      while (k < min) {
        // compare character code from ASCII
        if (
          strs[i][k].toLowerCase().charCodeAt() >
          strs[j][k].toLowerCase().charCodeAt()
        ) {
          strs[i] = strs[j];
          strs[j] = temp;
          flag = true;
          break;
        } else if (
          strs[i][k].toLowerCase().charCodeAt() <
          strs[j][k].toLowerCase().charCodeAt()
        ) {
          flag = true;
          break;
        }
        k++;
      }

      if (!flag) {
        if (strs[j].length === min) {
          strs[i] = strs[j];
          strs[j] = temp;
        }
      }
    }
  }

  return strs;
}

module.exports = handler;

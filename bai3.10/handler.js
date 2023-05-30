/**
 * Write a program that takes a list of strings as input and returns
 * the list sorted by the number of distinct characters in each string,
 * with the shortest strings appearing first
 * @param {string[]} strs
 * @returns {string[]}
 *      the list sorted by the number of distinct characters in each string,
 *      with the shortest strings appearing first
 */
function handler(strs) {
  if (!strs.length) return "The list is empty";

  strs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < strs.length; ++i) {
    const mapA = {};
    const mapB = {};

    for (let j = i + 1; j < strs.length; ++j) {
      if (strs[j].length !== strs[i].length) break;

      for (let k = 0; k < strs[i].length; ++k)
        if (!mapA[strs[i][k]]) mapA[strs[i][k]] = true;
      for (let k = 0; k < strs[j].length; ++k)
        if (!mapB[strs[j][k]]) mapB[strs[j][k]] = true;

      let cA = 0,
        cB = 0;
      for (let i in mapA) cA++;
      for (let i in mapB) cB++;

      if (cA < cB) {
        temp = strs[i];
        strs[i] = strs[j];
        strs[j] = temp;
      }
    }
  }

  return strs;
}

module.exports = handler;

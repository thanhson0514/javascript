/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {string[]} strs
 * @returns {number | string} the longest word in the list
 */
function handler(strs) {
  if (!strs.length) return "The list is empty";

  let max = strs[0];
  let numberLogestWord = countWord(max);

  for (let i = 1; i < strs.length; ++i) {
    const countTheWordInList = countWord(strs[i]);
    const countTheWordInMax = countWord(max);

    if (countTheWordInList > countTheWordInMax) {
      numberLogestWord = countTheWordInList;
      max = strs[i];
    }
  }

  return numberLogestWord;
}

/**
 * Count of the word
 * @param {string} str
 * @returns {number} The number of the word
 */
function countWord(str) {
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

/**
 * Write a program that takes a list of strings as input and
 * returns the list sorted by the number of distinct words in each string,
 * with the longest strings appearing first.
 * @param {string[]} strs
 * @returns {string[]}
 *  the list sorted by the number of distinct words in each string,
 *  with the longest strings appearing first.
 */
function handler(strs) {
  if (!strs.length) return "The list is empty";

  let max = 0;

  for (let i = 0; i < strs.length; ++i)
    if (strs[i].length > max) max = strs[i].length;

  const listLengthOfStr = new Array(max).fill(0);

  strs.forEach((element) => {
    if (listLengthOfStr[element.length]) {
      for (let i = 0; i < element.length; ++i) {
        if (
          element[i].toLowerCase().charCodeAt() ===
          listLengthOfStr[element.length][i].toLowerCase().charCodeAt()
        )
          continue;

        let pos =
          element[i].toLowerCase().charCodeAt() >
          listLengthOfStr[element.length][i].toLowerCase().charCodeAt();
        let index = element.length + pos + !pos * -1;

        while (listLengthOfStr[index]) index += pos + !pos * -1;
        listLengthOfStr[index] = element;
      }
    } else {
      listLengthOfStr[element.length] = element;
    }
  });

  const result = [];

  for (let i = listLengthOfStr.length - 1; i > -1; --i)
    if (listLengthOfStr[i]) result.push(listLengthOfStr[i]);

  return result;
}

module.exports = handler;

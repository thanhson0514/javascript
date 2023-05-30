/**
 * Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
 * @param {string} str1
 * @param {string} str2
 * @returns {string} the longest common subsequence of the two strings
 */
function handler(str1, str2) {
  const minLengthStr = Math.min(str1.length, str2.length);
  const maxLengthStr = Math.max(str1.length, str2.length);
  const minStr1 = str1.length === minLengthStr ? str1 : str2;
  const maxStr2 = str2.length === maxLengthStr ? str2 : str1;
  const table = new Array(minLengthStr);

  for (let i = 0; i < table.length; ++i)
    table[i] = new Array(maxLengthStr).fill(0);

  for (let i = 0; i < minLengthStr; ++i) {
    for (let j = 0; j < maxLengthStr; ++j) {
      table[i][j] = +(minStr1[i] === maxStr2[j]);
    }
  }

  let max = 0;
  let strLongest = "";
  let start = -1;
  let end = -1;

  for (let i = 0; i < minLengthStr; ++i) {
    let count = 0;

    for (let j = 0; j < minLengthStr - i; ++j) {
      if (table[j][j]) {
        count++;
        if (start < 0) start = j;
        else end = j;
      } else {
        if (count > max) {
          max = count;
          strLongest = minStr1.slice(start, end + 1);
          start = -1;
          end = -1;
        }
      }
    }
    if (count > max) {
      max = count;
      strLongest = minStr1.slice(
        start,
        end < 0 && start >= 0 ? start + 1 : end + 1
      );
      start = -1;
      end = -1;
    }
  }

  start = -1;
  end = -1;
  for (let i = 1; i < maxLengthStr; ++i) {
    let count = 0;
    for (let j = 0; j < minLengthStr; ++j) {
      if (table[j][j + i]) {
        count++;
        if (start < 0) start = j;
        else end = j;
      } else {
        if (count > max) {
          max = count;
          strLongest = minStr1.slice(start, end + 1);
          start = -1;
          end = -1;
        }
      }
    }

    if (count > max) {
      max = count;
      strLongest = minStr1.slice(
        start,
        end < 0 && start >= 0 ? start + 1 : end + 1
      );
      start = -1;
      end = -1;
    }
  }

  return strLongest;
}

module.exports = handler;

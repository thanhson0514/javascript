/**
 * Write a program that takes a list of integers as input and
 * returns the length of the longest increasing subsequence of the numbers,
 * with the additional constraint that no two adjacent elements
 * in the subsequence can differ by more than 1.
 * @param {number[]} nums
 * @returns {number} the length of the longest increasing subsequence of the numbers
 */
function handler(nums) {
  if (!nums.length) return "The list is empty";

  let count = 1;
  let max = 0;

  nums.reduce((acc, val, i) => {
    if (val - acc === 1 && i) count++;
    else {
      if (max < count) max = count;
      count = 1;
    }
    return val;
  }, 0);

  if (max < count) max = count;
  return max;
}

module.exports = handler;

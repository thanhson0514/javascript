/**
 * Write a program that takes a list of integers as input and
 * returns the longest increasing subsequence of the numbers.
 * @param {number[]} nums
 * @returns {number} the longest increasing subsequence of the numbers
 */
function handler(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; ++i) {
    let count = 1;
    let flag = nums[i];
    for (let j = i + 1; j < nums.length; ++j) {
      if (flag < nums[j]) {
        flag = nums[j];
        count++;
      }
    }
    if (count > max) max = count;
  }
  return max;
}

module.exports = handler;

/**
 * Write a program that takes a list of integers as input and
 * returns the maximum sum of any contiguous subarray within the list.
 * @param {number[]} nums
 * @returns {number} the maximum sum of any contiguous subarray within the list
 */
function handler(nums) {
  if (!nums.length) return 0;

  let max = nums[0];
  for (let i = 0; i < nums.length; ++i) {
    for (let k = 0; k < nums.length - i; ++k) {
      const sum = nums.slice(k, k + i + 1).reduce((acc, val) => acc + val, 0);
      if (sum > max) max = sum;
    }
  }

  return max;
}

module.exports = handler;

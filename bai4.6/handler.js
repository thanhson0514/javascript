/**
 * Write a program that takes a list of integers as input and
 * returns the maximum product of any three distinct elements in the list.
 * @param {number[]} nums
 * @returns {number} the maximum product of any three distinct elements in the list
 */
function handler(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        max = Math.max(max, nums[i] * nums[j] * nums[k]);
      }
    }
  }

  return max === -Infinity ? 0 : max;
}

module.exports = handler;

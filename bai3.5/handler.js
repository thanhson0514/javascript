/**
 * Write a program that takes a list of numbers as input and
 * returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 * @param {number[]} nums
 * @returns {number} the smallest positive integer that cannot be represented as the sum of any subset of the list
 */
function handler(nums) {
  nums.sort((a, b) => a - b);

  let res = 1;

  for (let i = 0; i < nums.length && nums[i] <= res; ++i) {
    res += nums[i];
  }

  return res;
}

module.exports = handler;

/**
 * Write a program that takes a list of integers as input and
 * returns the maximum difference between any two elements in the list.
 * @param {number[]} nums
 * @returns {number | string} the maximum difference between any two elements in the list
 */
function handler(nums) {
  if (nums.length < 2) return "The list required more than two elements";
  nums.sort((a, b) => a - b);
  const min = nums.shift();
  const max = nums.pop();
  return max - min;
}

module.exports = handler;

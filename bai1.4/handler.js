/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {number[]} nums
 * @returns {number | string} the largest number in the list
 */
function handler(nums) {
  if (!nums.length) return "Not the largest number in the list";
  let max = nums[0];

  for (let i = 1; i < nums.length; ++i) if (nums[i] > max) max = nums[i];

  return max;
}

module.exports = handler;

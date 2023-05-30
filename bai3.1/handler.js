/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {number[]} nums
 * @returns {number | string} the second smallest number in the list
 */
function handler(nums) {
  if (!nums.length) return "The list is empty";
  if (nums.length === 1) return nums.pop();

  const listToSet = new Set(nums);
  const setTolist = new Array(...listToSet);
  setTolist.sort((a, b) => b - a);

  return setTolist[setTolist.length - 2];
}

module.exports = handler;

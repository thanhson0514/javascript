/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {number[]} nums
 * @returns {number} the second largest number in the list
 */
function handler(nums) {
  if (!nums.length) return "The list is empty";
  if (nums.length === 1) return nums.pop();

  const listToSet = new Set(nums);
  const setToList = Array(...listToSet);

  setToList.sort((a, b) => a - b);
  return setToList[setToList.length - 2];
}

module.exports = handler;

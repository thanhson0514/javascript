/**
 * Write a program that takes a list of numbers as input and sorts the list in ascending order.
 * @param {number[]} nums
 * @returns {number[]} sorts the list in ascending order
 */
function handler(nums) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  // nums.sort();
  return nums;
}

module.exports = handler;

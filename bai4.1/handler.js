/**
 * Write a program that takes a list of integers as input and returns
 * the minimum number of moves required to sort the list in ascending order using bubble sort
 * @param {number[]} nums
 * @returns {number} the minimum number of moves required to sort the list in ascending order using bubble sort
 */
function handler(nums) {
  let move = 0;

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] > nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        move++;
      }
    }
  }

  return move;
}

module.exports = handler;

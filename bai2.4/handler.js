/**
 * Write a program that takes a list of numbers as input and
 * returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {number[]} nums
 * @returns {number | string} the sum of the numbers that are divisible by both 3 and 5
 */
function handler(nums) {
  if (!nums.length) return "The list is empty";
  let total = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!(nums[i] % 3) && !(nums[i] % 5)) total += nums[i];
    // for (let k = 0; k < nums.length - i; ++k) {
    //   const sum = nums.slice(k, k + i + 1).reduce((acc, val) => acc + val, 0);
    //   if (!(sum % 3) && !(sum % 5)) {
    //     for (let j = k; j < k + i + 1; ++j)
    //       if (!check[nums[j]]) check[nums[j]] = true;
    //   }
    // }
  }

  return total;
}

module.exports = handler;

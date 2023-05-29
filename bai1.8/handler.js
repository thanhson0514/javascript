/**
 * Write a program that takes a list of numbers as input and returns the median of the numbers.
 * @param {number[]} nums
 * @returns {number | string} the median of the numbers
 */
function handler(nums) {
  if (!nums.length) return "The list of numbers is empty";
  nums.sort((a, b) => a - b);
  /* 
    N = 2k + 1 (số lẻ) => Me = x
    N = 2k (số chẵn) => M = (x + x-1) / 2
    Trong đó: 
       + x là vị trí ở giữa của dãy (x = N/2)
       + N là số lượng phần tử
  */
  const center = Math.floor(nums.length / 2);
  const M =
    (+!(nums.length % 2) *
      (nums[center] + nums[+!(center - 1 < 0) && center - 1])) /
      2 +
    +(nums.length % 2) * nums[center];

  return M;
}

module.exports = handler;

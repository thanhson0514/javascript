/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number | string} the median of the combined list
 */
function handler(nums1, nums2) {
  if (!nums1.length && !nums2.length) return "The two list of numbers is empty";

  const combinedList = [...nums1, ...nums2];
  combinedList.sort((a, b) => a - b);
  const center = Math.floor(combinedList.length / 2);

  /* 
    N = 2k + 1 (số lẻ) => Me = x
    N = 2k (số chẵn) => M = (x + x-1) / 2
    Trong đó: 
       + x là vị trí ở giữa của dãy (x = N/2)
       + N là số lượng phần tử
  */
  const M =
    (+!(combinedList.length % 2) *
      (combinedList[center] + combinedList[+!(center - 1 < 0) && center - 1])) /
      2 +
    +(combinedList.length % 2) * combinedList[center];

  return M;
}

module.exports = handler;

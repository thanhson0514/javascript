/**
 * Write a program that takes a list of strings as input and
 * returns the length of the longest substring that appears in every string in the list.
 * @param {string[]} nums
 * @returns {number} the length of the longest substring that appears in every string in the list
 */
function handler(nums) {
  if (!nums.length) return "The list is empty";

  nums.sort((a, b) => a.length - b.length);
  let lengthOfSubstr = 1;
  let maxCount = 0;

  for (let i = 0; i < nums.length; ++i) {
    const window = nums[i].length;
    const curr = nums[i];
    let count = 0;

    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = 0; k < nums[j].length - window + 1; ++k) {
        const substr = nums[j].slice(k, k + window);
        if (curr === substr) count++;
      }
    }

    if (count > maxCount) {
      lengthOfSubstr = curr.length;
      maxCount = count;
    }
  }

  return lengthOfSubstr;
}

module.exports = handler;

/**
 * reverses: Cho đầu vào là 1 mảng, Viết một function
 * để đảo ngược thứ tự phần tử trong mảng , yêu cầu
 * không dùng hàm Reverses có sẵn của javascript
 * @param {any[]} nums
 * @returns {any[]} mảng đảo ngược
 */
function handler(nums) {
  const reverseArr = nums.reduce((a, b) => [b, ...a], []);
  return reverseArr;
}

module.exports = handler;

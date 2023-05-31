/**
 * uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
 * @param {any[]} arr
 * @returns {any[]} mảng loại bỏ các phần tử trùng lặp
 */
function handler(arr) {
  if (arr.length === 1) return arr;
  return Array(...new Set(arr));
}

module.exports = handler;

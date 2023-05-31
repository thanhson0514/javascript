/**
 * Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.
 * @param {any[]} arr
 * @param {number} k
 * @returns {any[]} mảng được chia đều theo k
 */
function handler(arr, k) {
  return [[...arr.slice(0, k)], [...arr.slice(k, arr.length)]];
}

module.exports = handler;

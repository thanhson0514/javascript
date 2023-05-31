/**
 * TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ,
 * nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
 * @param {string} str
 * @returns {string} chuỗi được xoá khoảng trắng
 */
function trimAll(str) {
  return str
    .trim()
    .split(" ")
    .filter((item) => !!item.length)
    .join(" ");
}

module.exports = trimAll;

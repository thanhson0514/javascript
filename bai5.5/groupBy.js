/**
 * Group by: Cho đầu vào là 1 collection ( array of object ),
 * Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
 * @param {object[]} arrObj
 * @param {string} key
 * @returns {object} object được nhóm theo trường chỉ định
 */
function groupBy(arrObj, key) {
  const result = {};
  const mapObj = arrObj.map((item) => item[key]);

  for (let i in mapObj) {
    result[mapObj[i]] = arrObj.filter((item) => item[key] === mapObj[i]);
  }
  return result;
}

module.exports = groupBy;

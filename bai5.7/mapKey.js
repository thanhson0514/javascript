/**
 * MapKey: Cho 1 mảng các key, vào 1 mảng các object ,
 * Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
 * @param {string[]} keys
 * @param {object[]} collections
 * @returns {object[]} một mảng các object theo thứ tự mảng các key
 */
function mapKey(keys, collections) {
  return collections.map((item) =>
    keys.length
      ? Object.assign(
          {},
          ...keys.map((key) => item[key] && { [key]: item[key] })
        )
      : item
  );
}

module.exports = mapKey;

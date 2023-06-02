/**
 * Switch Order: Viết function để thay đổi thứ tự order của các object.
 * @param {object[]} arr
 * @param {number} id
 * @param {number} order
 * @returns {object[]} array thay đổi thứ tự order của các object
 */
function switchOrder(arr, id, order) {
  let flag = true;
  for (let i in arr) {
    if (arr[i].id === id) flag = false;
  }

  if (flag) return arr;

  arr.sort((a, b) => a.order - b.order);

  const indexObjOrder = arr.findIndex((item) => item.id === id);

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].order === order) {
      temp = { id: arr[i].id, order: arr[indexObjOrder].order };
      arr[i] = { id, order };
      arr[indexObjOrder] = temp;
      break;
    }
  }
  return arr;
}

module.exports = switchOrder;

const handler = require("./handler");

test("Sắp xếp dãy nguyên dương theo thứ tự tăng dần", () => {
  expect(handler([6, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Sắp xếp dãy bất kì theo thứ tự tăng dân trong đó có các phần tử trùng nhau", () => {
  expect(handler([6, 3, 2, 6, 4, 1, 5, 1, 3])).toEqual([
    1, 1, 2, 3, 3, 4, 5, 6, 6,
  ]);
});

test("Sắp xếp dãy nguyên âm theo thứ tự tăng dần", () => {
  expect(handler([-6, -3, -2, -4, -1, -5, -6])).toEqual([
    -6, -6, -5, -4, -3, -2, -1,
  ]);
});

test("Sắp xếp dãy bất kì theo thứ tự tăng dần", () => {
  expect(handler([3, 1, -4, -7, 0, 5, 1, 2, 3, -4, 6, 0])).toEqual([
    -7, -4, -4, 0, 0, 1, 1, 2, 3, 3, 5, 6,
  ]);
});

test("Sắp xếp dãy rỗng theo thứ tự tăng dần", () => {
  expect(handler([])).toEqual([]);
});

const handler = require("./handler");

test("Tìm số lớn nhất trong mảng số nguyên dương", () => {
  expect(handler([4, 1, 3, 6, 3, 5])).toBe(6);
});

test("Tìm số lớn nhất trong mảng số nguyên âm", () => {
  expect(handler([-4, -1, -3, -6, -3, -5])).toBe(-1);
});

test("Tìm số lớn nhất trong mảng số nguyên dương và nguyên âm", () => {
  expect(handler([4, -9, 1, 3, -6, -2, 3, -5])).toBe(4);
});

test("Tìm số lớn nhất trong mảng rỗng", () => {
  expect(handler([])).toBe("Not the largest number in the list");
});

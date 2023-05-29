const handler = require("./handler");

test("Tìm số lớn thứ 2 của dãy nguyên âm", () => {
  expect(handler([-70, -11, -20, -4, -100])).toBe(-11);
});

test("Tìm số lớn thứ 2 của dãy có các phần tử giống nhau", () => {
  expect(handler([12, 32, 12, -43, 33, 33, 32, 16, -90, 10, 33])).toBe(32);
});

test("Tìm số lớn thứ 2 với dãy rỗng", () => {
  expect(handler([])).toBe("The list is empty");
});

test("Tìm số lớn thứ 2 với dãy có 1 phần tử", () => {
  expect(handler([22])).toBe(22);
});

test("Tìm số lớn thứ 2 của dãy nguyên dương", () => {
  expect(handler([70, 11, 20, 4, 100])).toBe(70);
});

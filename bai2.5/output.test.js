const handler = require("./handler");

test("Tìm tổng lớn nhất của dãy con với dãy số nguyên bất kì", () => {
  expect(handler([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
});

test("Tìm tổng lớn nhất của dãy con với dãy không có phần tử", () => {
  expect(handler([])).toBe(0);
});

test("Tìm tổng lớn nhất của dãy con với dãy có 1 phần tử là số nguyên dương", () => {
  expect(handler([2])).toBe(2);
});

test("Tìm tổng lớn nhất của dãy con với dãy có 1 phần tử là số nguyên âm", () => {
  expect(handler([-2])).toBe(-2);
});

test("Tìm tổng lớn nhất của dãy con với dãy có các phân tử là số nguyên âm", () => {
  expect(handler([-2, -3, -4, -1])).toBe(-1);
});

test("Tìm tổng lớn nhất của dãy con với dãy có các phân tử là số nguyên dương", () => {
  expect(handler([1, 2, 3, 4])).toBe(10);
});

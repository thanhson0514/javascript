const handler = require("./handler");

test("Tích 3 phần tử lớn nhất trong dãy với dãy là testase của ví dụ", () => {
  expect(handler([-10, -5, 0, 1, 2, 3, 4])).toBe(200);
});

test("Tích 3 phần tử lớn nhất trong dãy với dãy bất kì", () => {
  expect(handler([1, 4, 3, -6, -7, 0])).toBe(168);
});

test("Tích 3 phần tử lớn nhất trong dãy với dãy là số nguyên dương", () => {
  expect(handler([10, 3, 5, 6, 20])).toBe(1200);
});

test("Tích 3 phần tử lớn nhất trong dãy với dãy là số nguyên âm", () => {
  expect(handler([-1, -2, -3, -4, -5])).toBe(-6);
});

test("Tích 3 phần tử lớn nhất trong dãy với dãy không có phần tử", () => {
  expect(handler([])).toBe(0);
});

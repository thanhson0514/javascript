const handler = require("./handler");

test("Số bước khi sắp xếp dãy tăng (bubble sort) với dãy bất kì", () => {
  expect(handler([3, 1, 4, 2, 6, 5])).toBe(4);
});

test("Số bước khi sắp xếp dãy tăng (bubble sort) với dãy bất kì", () => {
  expect(handler([6, 3, 0, 5])).toBe(4);
});

test("Số bước khi sắp xếp dãy tăng (bubble sort) với dãy nguyên âm", () => {
  expect(handler([-5, -3, -8, -4, -6])).toBe(6);
});

test("Số bước khi sắp xếp dãy tăng (bubble sort) với dãy không có phần tử", () => {
  expect(handler([])).toBe(0);
});

test("Số bước khi sắp xếp dãy tăng (bubble sort) với dãy 1 phần tuwrF", () => {
  expect(handler([1])).toBe(0);
});

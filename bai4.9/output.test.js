const handler = require("./handler");

test("Dãy con dài nhất với các phần tử không quá 1 của dãy trong testcase ví dụ", () => {
  expect(handler([1, 2, 3, 8, 6, 3])).toBe(3);
});

test("Dãy con dài nhất với các phần tử không quá 1 của dãy trong testcase ví dụ", () => {
  expect(handler([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])).toBe(6);
});

test("Dãy con dài nhất với các phần tử không quá 1 của dãy bất kì", () => {
  expect(handler([1, 4, 5, 6, 2, 3, 4, 5, 6, 7, 9, 8])).toBe(6);
});

test("Dãy con dài nhất với các phần tử không quá 1 của dãy có 1 phần tử", () => {
  expect(handler([3])).toBe(1);
});

test("Dãy con dài nhất với các phần tử không quá 1 của dãy không có phần tử", () => {
  expect(handler([])).toBe("The list is empty");
});

const handler = require("./handler");

test("Tìm số nguyên dương không có trong mảng hoặc tổng dãy con bằng nó với dãy của testcase trong ví dụ", () => {
  expect(handler([1, 2, 3, 7, 8, 20])).toBe(42);
});

test("Tìm số nguyên dương không có trong mảng hoặc tổng dãy con bằng nó với dãy không có tổng bằng nó", () => {
  expect(handler([1, 3, 4, 5])).toBe(2);
});

test("Tìm số nguyên dương không có trong mảng hoặc tổng dãy con bằng nó với dãy bất kì", () => {
  expect(handler([1, 2, 6, 10, 11, 15])).toBe(4);
});

test("Tìm số nguyên dương không có trong mảng hoặc tổng dãy con bằng nó với dãy có tất cả phần tử giống nhau", () => {
  expect(handler([1, 1, 1, 1])).toBe(5);
});

const handler = require("./handler");

test("Dãy con tăng có độ dài lớn nhất với dãy bất kì (test của ví dụ)", () => {
  expect(handler([3, 10, 2, 1, 20])).toBe(3);
});

test("Dãy con tăng có độ dài lớn nhất với dãy không có phần tử", () => {
  expect(handler([])).toBe(0);
});

test("Dãy con tăng có độ dài lớn nhất với dãy có 1 phần tử", () => {
  expect(handler([3])).toBe(1);
});

test("Dãy con tăng có độ dài lớn nhất với dãy giảm", () => {
  expect(handler([5, 4, 3, 2, 1])).toBe(1);
});

test("Dãy con tăng có độ dài lớn nhất với dãy bất kì", () => {
  expect(handler([3, 6, 2, 1, 4, 5, 6, 8])).toBe(5);
});

test("Dãy con tăng có độ dài lớn nhất với dãy âm", () => {
  expect(handler([-3, -6, -2, -4, -8, -10, -3, -1])).toBe(3);
});

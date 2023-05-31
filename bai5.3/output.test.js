const handler = require("./handler");

test("Mảng loại bỏ các phần tử trùng nhau với dãy là testcase của ví dụ", () => {
  expect(handler([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});

test("Mảng loại bỏ các phần tử trùng nhau với dãy là số nguyên", () => {
  expect(handler([2, 4, 4, 5, 1, 3, 4])).toEqual([2, 4, 5, 1, 3]);
});

test("Mảng loại bỏ các phần tử trùng nhau với dãy là chữ", () => {
  expect(handler(["a", "b", "a", "c", "c", "d", "a"])).toEqual([
    "a",
    "b",
    "c",
    "d",
  ]);
});

test("Mảng loại bỏ các phần tử trùng nhau với dãy bao gồm cả số và chữ", () => {
  expect(handler([1, 3, 3, "a", "c", 4, "a", "b"])).toEqual([
    1,
    3,
    "a",
    "c",
    4,
    "b",
  ]);
});

test("Mảng loại bỏ các phần tử trùng nhau với dãy rỗng", () => {
  expect(handler([])).toEqual([]);
});

test("Mảng loại bỏ các phần tử trùng nhau với dãy có 1 phần tử", () => {
  expect(handler([1])).toEqual([1]);
});

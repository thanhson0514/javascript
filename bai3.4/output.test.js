const handler = require("./handler");

test("Tìm 2 chuỗi có số kí tự trùng nhiều nhất với testcase của ví dụ", () => {
  expect(handler(["hello", "world", "foobar", "barfoo", "he", "llo"])).toEqual([
    "foobar",
    "barfoo",
  ]);
});

test("Tìm 2 chuỗi có số kí tự trùng nhiều nhất với testcase của ví dụ", () => {
  expect(handler(["abcdefg", "cdefghijklm", "ghijklmnopqr"])).toEqual([
    "cdefghijklm",
    "ghijklmnopqr",
  ]);
});

test("Tìm 2 chuỗi có số kí tự trùng nhiều nhất với dãy không có phần tử", () => {
  expect(handler([])).toEqual("The list required more than two elements");
});

test("Tìm 2 chuỗi có số kí tự trùng nhiều nhất với dãy có 1 phần tử", () => {
  expect(handler(["hello"])).toEqual(
    "The list required more than two elements"
  );
});

test("Tìm 2 chuỗi có số kí tự trùng nhiều nhất với dãy có 2 phần tử giống nhau", () => {
  expect(handler(["hello", "hello"])).toEqual(["hello", "hello"]);
});

test("Tìm 2 chuỗi có số kí tự trùng nhiều nhất với dãy không có kí tự nào trong mỗi phần tử trùng nhau", () => {
  expect(handler(["wait", "hello"])).toEqual([]);
});

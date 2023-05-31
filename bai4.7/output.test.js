const handler = require("./handler");

test("Sắp xếp chuỗi với độ dài của chuỗi (từ dài đến ngắn) với dãy là testcase của ví dụ", () => {
  expect(
    handler([
      "the quick brown fox",
      "the lazy dog jumps over the fence",
      "the cat in the hat",
    ])
  ).toEqual([
    "the lazy dog jumps over the fence",
    "the quick brown fox",
    "the cat in the hat",
  ]);
});

test("Sắp xếp chuỗi với độ dài của chuỗi (từ dài đến ngắn) với dãy không có phần tử", () => {
  expect(handler([])).toEqual("The list is empty");
});

test("Sắp xếp chuỗi với độ dài của chuỗi (từ dài đến ngắn) với dãy có 1 phần tử", () => {
  expect(handler(["the lazy dog jumps over the fence"])).toEqual([
    "the lazy dog jumps over the fence",
  ]);
});

test("Sắp xếp chuỗi với độ dài của chuỗi (từ dài đến ngắn) với dãy có các phân tử có độ dài giống nhau", () => {
  expect(handler(["a b c e", "a b c d", "a b c f", "a b c a"])).toEqual([
    "a b c f",
    "a b c e",
    "a b c d",
    "a b c a",
  ]);
});

test("Sắp xếp chuỗi với độ dài của chuỗi (từ dài đến ngắn) với dãy có các phần tử có độ dài của các phần tử tăng dần", () => {
  expect(
    handler(["a b c f", "a b c e f", "a b c d g h", "a b c a t b c"])
  ).toEqual(["a b c a t b c", "a b c d g h", "a b c e f", "a b c f"]);
});

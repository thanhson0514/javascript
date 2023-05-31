const handler = require("./handler");

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy là testcase của ví dụ", () => {
  expect(handler(["abcdefg", "abcde", "abcdef", "ab", "abc"])).toBe(2);
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy là testcase của ví dụ", () => {
  expect(handler(["abcd", "ab", "abcd", "ab", "abcd"])).toBe(2);
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy là testcase của ví dụ", () => {
  expect(handler(["programming", "programmer", "program"])).toBe(7);
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy là testcase của ví dụ", () => {
  expect(handler(["hello", "world", "jelly"])).toBe(1);
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy bất kì", () => {
  expect(handler(["abcde", "ea", "eaa", "abcdef", "abcdede", "abcdert"])).toBe(
    5
  );
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy có các phần tử giống nhau", () => {
  expect(handler(["abcd", "abcd", "abcd", "abcd", "abcd", "abcd"])).toBe(4);
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy không có phần tử", () => {
  expect(handler([])).toBe("The list is empty");
});

test("Chuỗi con có độ dài dài nhất xuất hiện nhiều trong dãy với dãy có 1 phần tử là chuỗi rỗng", () => {
  expect(handler([""])).toBe(1);
});

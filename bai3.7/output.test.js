const handler = require("./handler");

test("Độ dài chuỗi đối xứng dài nhất trong chuỗi trong chuỗi bất kì", () => {
  expect(handler("aba")).toBe(3);
});

test("Độ dài chuỗi đối xứng dài nhất trong chuỗi trong chuỗi bất kì", () => {
  expect(handler("abccccdd")).toBe(7);
});

test("Độ dài chuỗi đối xứng dài nhất trong chuỗi trong chuỗi có độ dài là 1", () => {
  expect(handler("a")).toBe(1);
});

test("Độ dài chuỗi đối xứng dài nhất trong chuỗi trong chuỗi có dấu cách", () => {
  expect(handler("A man a plan a canal Panama")).toBe(21);
});

test("Độ dài chuỗi đối xứng dài nhất trong chuỗi trong chuỗi rỗng", () => {
  expect(handler("")).toBe(0);
});

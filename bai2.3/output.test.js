const handler = require("./handler");

test("Tìm chuỗi con của 2 chuỗi trong đó độ dài chuỗi 1 ngắn hơn chuỗi 2", () => {
  expect(handler("abcdef", "abczyzcdef")).toBe("cdef");
});

test("Tìm chuỗi con của 2 chuỗi trong đó độ dài chuỗi 1 dài hơn chuỗi 2", () => {
  expect(handler("abczyzcdef", "abcdef")).toBe("cdef");
});

test("Tìm chuỗi con của 2 chuỗi trong đó độ dài 2 chuỗi bằng nhau", () => {
  expect(handler("abcdef", "abcdef")).toBe("abcdef");
});

test("Tìm chuỗi con của 2 chuỗi có độ dài bằng nhau và giống nhau nhưng khác 1 chữ cuối", () => {
  expect(handler("abcdefa", "abcdefb")).toBe("abcdef");
});

test("Tìm chuỗi con của 2 chuỗi có độ dài bằng nhau nhưng không có kí tự nào giống nhau", () => {
  expect(handler("acd", "bfe")).toBe("");
});

test("Tìm chuỗi con của 2 chuỗi với độ dài chuỗi bằng 1 với 2 chuỗi là khác nhau", () => {
  expect(handler("a", "b")).toBe("");
});

test("Tìm chuỗi con của 2 chuỗi với độ dài chuỗi bằng 1 với 2 chuỗi là giống nhau", () => {
  expect(handler("a", "a")).toBe("a");
});

test("Tìm chuỗi con của 2 chuỗi trong đó chuỗi 2 là rỗng", () => {
  expect(handler("a", "")).toBe("");
});

test("Tìm chuỗi con của 2 chuỗi trong đó chuỗi 1 là rỗng", () => {
  expect(handler("", "a")).toBe("");
});

test("Tìm chuỗi con của 2 chuỗi trong đó 2 chuỗi đều rỗng", () => {
  expect(handler("", "")).toBe("");
});

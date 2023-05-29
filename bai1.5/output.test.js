const handler = require("./handler");

test("Chuỗi ngắn nhất trong dãy chuỗi bất kì", () => {
  expect(handler(["abc", "abcde", "abcdef", "abcd", "ab", "abcde"])).toBe("ab");
});

test("Chuỗi ngắn nhất trong dãy chuỗi có độ dài giống nhau", () => {
  expect(handler(["abc", "def", "fec", "acd"])).toBe("abc");
});

test("Chuỗi ngắn nhất trong dãy rỗng", () => {
  expect(handler([])).toBe("Not the shortest string in the list");
});

test("Chuỗi ngắn nhất trong dãy có 1 phần tử", () => {
  expect(handler(["abcdef"])).toBe("abcdef");
});

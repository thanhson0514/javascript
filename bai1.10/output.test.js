const handler = require("./handler");

test("Số chuỗi chứa kí tự 'a'", () => {
  expect(handler(["de", "this", "that", "hello", "from", "Vietnam"])).toBe(2);
});

test("Số chuỗi chứa kí tự 'a' trong dãy chuỗi không có kí tự 'a'", () => {
  expect(handler(["this", "run", "bye", "who"])).toBe(0);
});

test("Số chuỗi chứa kí tự 'a' với 1 phần tử của dãy chứa nhiều kí tự 'a'", () => {
  expect(handler(["aaaaa"])).toBe(1);
});

test("Số chuỗi chứa kí tự 'a' trong dãy rỗng", () => {
  expect(handler([])).toBe(0);
});

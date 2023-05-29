const handler = require("./handler");

test("Độ dài chuỗi bất kỳ", () => {
  expect(handler("abcd")).toBe(4);
});

test("Độ dài chuỗi rỗng", () => {
  expect(handler("")).toBe(0);
});

const handler = require("./handler");

test("Bình phương số nguyên dương", () => {
  expect(handler(4)).toBe(16);
});

test("Bình phương số nguyên âm", () => {
  expect(handler(-5)).toBe(25);
});

test("Bình phương số 0", () => {
  expect(handler(0)).toBe(0);
});

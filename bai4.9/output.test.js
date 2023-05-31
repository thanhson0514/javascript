const handler = require("./handler");

test("", () => {
  expect(handler([1, 2, 3, 8, 6, 3])).toBe(3);
});

test("", () => {
  expect(handler([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])).toBe(6);
});

test("", () => {
  expect(handler([1, 4, 5, 6, 2, 3, 4, 5, 6, 7, 9, 8])).toBe(6);
});

test("", () => {
  expect(handler([3])).toBe(1);
});

test("", () => {
  expect(handler([])).toBe("The list is empty");
});

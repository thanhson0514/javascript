const handler = require("./handler");

test("", () => {
  expect(handler([1, 2, 91, 9, 100])).toBe(99);
});

test("", () => {
  expect(handler([1, 2, -91, 9, 100, 67, -92, 101])).toBe(193);
});

test("", () => {
  expect(handler([-1, -2, -91, -9, -100])).toBe(99);
});

test("", () => {
  expect(handler([1, 2])).toBe(1);
});

test("", () => {
  expect(handler([])).toBe("The list required more than two elements");
});

test("", () => {
  expect(handler([1])).toBe("The list required more than two elements");
});

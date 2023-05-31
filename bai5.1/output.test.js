const handler = require("./handler");

test("Mảng đảo ngược với mảng là số", () => {
  expect(handler([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("Mảng đảo ngược với mảng là chữ", () => {
  expect(handler(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"]);
});

test("Mảng đảo ngược với mảng vừa số vừa chữ", () => {
  expect(handler([1, 2, "a", "b"])).toEqual(["b", "a", 2, 1]);
});

test("Mảng đảo ngược với mảng rỗng", () => {
  expect(handler([])).toEqual([]);
});

test("Mảng đảo ngược với mảng 1 phần tử", () => {
  expect(handler([1])).toEqual([1]);
});

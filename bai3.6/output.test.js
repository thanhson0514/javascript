const handler = require("./handler");

test("Tính trung vị của 2 dãy có số lượng phần tử là chẵn ở 2 dãy", () => {
  expect(handler([4, 8], [1, 5, 2, 9])).toEqual(4.5);
});

test("Tính trung vị của 2 dãy có số lượng phần tử là lẻ ở dãy 1 và chẵn ở dãy 2", () => {
  expect(handler([5], [7, 3, 1, 9])).toEqual(5);
});

test("Tính trung vị của 2 dãy có phần tử có các phần tử giống nhau và 2 dãy đều có số lượng lẻ", () => {
  expect(handler([8, 8, 8], [8, 8, 8])).toEqual(8);
});

test("Tính trung vị của 2 dãy trong đó có 1 dãy có 1 phần tử và 1 dãy không có phần tử", () => {
  expect(handler([1], [])).toEqual(1);
});

test("Tính trung vị của 2 dãy rỗng", () => {
  expect(handler([], [])).toEqual("The two list of numbers is empty");
});

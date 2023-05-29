const handler = require("./handler");

test("Tính trung vị của dãy có số lượng phần tử là chẵn", () => {
  expect(handler([4, 8, 1, 5, 2, 9])).toEqual(4.5);
});

test("Tính trung vị của dãy có số lượng phần tử là lẻ", () => {
  expect(handler([5, 7, 3, 1, 9])).toEqual(5);
});

test("Tính trung vị của dãy có phần tử có các phần tử giống nhau", () => {
  expect(handler([8, 8, 8, 8, 8, 8])).toEqual(8);
});

test("Tính trung vị của dãy có 1 phần tử", () => {
  expect(handler([1])).toEqual(1);
});

test("Tính trung vị của dãy rỗng", () => {
  expect(handler([])).toEqual("The list of numbers is empty");
});

const handler = require("./handler");

test("sắp xếp chuỗi theo bảng chữ cái trong đó có các kí tự đầu giống nhau nhưng khác độ dài", () => {
  expect(
    handler(["cda", "dac", "dabb", "cab", "da", "cabd", "dca", "da", "dab"])
  ).toEqual(["cab", "cabd", "cda", "da", "da", "dab", "dabb", "dac", "dca"]);
});

test("Sắp xếp chuỗi theo bảng chữ cái có độ dài chuỗi giống nhau", () => {
  expect(handler(["edb", "edc", "eac", "eaa", "ebc", "ead"])).toEqual([
    "eaa",
    "eac",
    "ead",
    "ebc",
    "edb",
    "edc",
  ]);
});

test("sắp xếp chuỗi bất kĩ theo bảng chữ cái", () => {
  expect(handler(["cac", "cba", "cd", "cba", "f", "ae", "aea", "a"])).toEqual([
    "a",
    "ae",
    "aea",
    "cac",
    "cba",
    "cba",
    "cd",
    "f",
  ]);
});

test("Sắp xếp chuỗi theo bảng chữ cái với các phần tử có độ dài là 1", () => {
  expect(handler(["c", "f", "d", "a", "g", "b", "a", "f", "e"])).toEqual([
    "a",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "f",
    "g",
  ]);
});

test("Sắp xếp chuỗi rỗng", () => {
  expect(handler([])).toEqual([]);
});

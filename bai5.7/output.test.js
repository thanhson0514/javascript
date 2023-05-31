const mapKey = require("./mapKey");

test("Mảng các object theo thứ tự mảng các key với ví dụ", () => {
  expect(
    mapKey(
      ["b", "a", "c"],
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ]
    )
  ).toEqual([
    { b: 1, a: 1, c: 2 },
    { b: 1, a: 2, c: 5 },
    { b: 11, a: 22, c: 51 },
  ]);
});

test("Mảng các object theo thứ tự mảng các key với ví dụ", () => {
  expect(
    mapKey(
      ["d", "a", "c"],
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ]
    )
  ).toEqual([
    { d: 4, a: 1, c: 2 },
    { d: 4, a: 2, c: 5 },
    { d: 4, a: 22, c: 51 },
  ]);
});

test("Mảng các object theo thứ tự mảng các key với key không có phần tử", () => {
  expect(
    mapKey(
      [],
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ]
    )
  ).toEqual([
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 },
  ]);
});

test("Mảng các object theo thứ tự mảng các key với key có phần tử không có trong collection", () => {
  expect(
    mapKey(
      ["f", "a"],
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ]
    )
  ).toEqual([{ a: 1 }, { a: 2 }, { a: 22 }]);
});

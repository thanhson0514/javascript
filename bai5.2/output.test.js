const handler = require("./handler");

test("Chia mảng với testcase của ví dụ", () => {
  expect(handler(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("Chia mảng với testcase của ví dụ", () => {
  expect(handler(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
});

test("Chia mảng với testcase với k = 0", () => {
  expect(handler(["a", "b", "c", "d"], 0)).toEqual([[], ["a", "b", "c", "d"]]);
});

test("fChia mảng với k bằng độ dài của mảng", () => {
  expect(handler(["a", "b", "c", "d"], 4)).toEqual([["a", "b", "c", "d"], []]);
});

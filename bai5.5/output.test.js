const groupBy = require("./groupBy");

test("Nhóm đối tượng theo trường chỉ định với đầu vào là ví dụ của bài", () => {
  expect(
    groupBy(
      [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 2, b: 2 },
      ],
      "a"
    )
  ).toEqual({
    1: [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ],
    2: [{ a: 2, b: 2 }],
  });
});

test("Nhóm đối tượng theo trường chỉ định với đầu vào là ví dụ của bài", () => {
  expect(
    groupBy(
      [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 2, b: 2 },
      ],
      "b"
    )
  ).toEqual({
    2: [
      { a: 1, b: 2 },
      { a: 2, b: 2 },
    ],
    3: [{ a: 1, b: 3 }],
  });
});

test("Nhóm đối tượng theo trường chỉ định với đầu vào bất kì", () => {
  expect(
    groupBy(
      [
        { name: "A", age: 12 },
        { name: "B", age: 14 },
        { name: "C", age: 12 },
        { name: "D", age: 17 },
        { name: "E", age: 14 },
        { name: "F", age: 14 },
        { name: "G", age: 15 },
        { name: "H", age: 21 },
        { name: "I", age: 17 },
      ],
      "age"
    )
  ).toEqual({
    12: [
      { name: "A", age: 12 },
      { name: "C", age: 12 },
    ],
    14: [
      { name: "B", age: 14 },
      { name: "E", age: 14 },
      { name: "F", age: 14 },
    ],
    15: [{ name: "G", age: 15 }],
    17: [
      { name: "D", age: 17 },
      { name: "I", age: 17 },
    ],
    21: [{ name: "H", age: 21 }],
  });
});

const switchOrder = require("./switchOrder");

test("", () => {
  expect(
    switchOrder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 11, order: 3 },
      ],
      9,
      1
    )
  ).toEqual([
    { id: 10, order: 0 },
    { id: 9, order: 1 },
    { id: 12, order: 2 },
    { id: 11, order: 3 },
  ]);
});

test("", () => {
  expect(
    switchOrder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 11, order: 3 },
      ],
      12,
      3
    )
  ).toEqual([
    { id: 10, order: 0 },
    { id: 11, order: 1 },
    { id: 9, order: 2 },
    { id: 12, order: 3 },
  ]);
});

test("", () => {
  expect(
    switchOrder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 11, order: 3 },
      ],
      13,
      3
    )
  ).toEqual([
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ]);
});

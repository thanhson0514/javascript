const handler = require("./handler");

test("Tổng các số chia hết cho 3 và 5 trong đó có 1 trong dãy số chia hết", () => {
  expect(handler([1, 2, 3, 4, 5, 15])).toBe(15);
});

test("Tổng các số chia hết cho 3 và 5 trong đó tất cả các phần tử trong dãy đều có số chia hết cho 3 và 5", () => {
  expect(handler([15, 30, 45])).toBe(90);
});

test("Tổng các số chia hết cho 3 và 5 với dãy không có phần tử", () => {
  expect(handler([])).toBe("The list is empty");
});

test("Tổng các số chia hết cho 3 và 5 với dãy không có số nào chia hết cho 3 và 5", () => {
  expect(handler([1, 2, 3, 4])).toBe(0);
});

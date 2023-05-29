const sum = require("./sum");

test("tính tổng số nguyên dương", () => {
  expect(sum(5, 10)).toBe(15);
});

test("tính tổng số nguyên dương có 3 chữ số ", () => {
  expect(sum(566, 101)).toBe(667);
});

test("tính tổng số nguyên: 1 số âm và 1 số dương", () => {
  expect(sum(-5, 10)).toBe(5);
});

test("tính tổng số nguyên âm ( cả 2 đều âm )", () => {
  expect(sum(-5, -10)).toBe(-15);
});

test("tính tổng số thập phân", () => {
  expect(sum(5.5, 10.1)).toBe(15.6);
});

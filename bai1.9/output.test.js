const handler = require("./handler");

test("Đếm số từ với câu hợp lệ", () => {
  expect(handler("Hello World!")).toBe(2);
});

test("Đếm số từ với câu không hợp lệ (Các kí tự sẽ không được tính là 1 từ)", () => {
  expect(handler("Hello World @@")).toBe(2);
});

test("Đếm số từ với câu văn bao gồm số đếm", () => {
  expect(handler("Hello World. My phone number is 1234567. Ok !")).toEqual(8);
});

test("Đếm số từ với câu văn hoàn chỉnh", () => {
  expect(handler("Hello World. This a ruler and ...! Something.")).toEqual(7);
});

test("", () => {
  expect(handler("")).toBe(0);
});

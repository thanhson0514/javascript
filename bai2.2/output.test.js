const handler = require("./handler");

test("Số lượng từ nhiều nhất trong dãy bất kì", () => {
  expect(handler(["Hello Wolrd", "The coder is working", "Hi"])).toBe(4);
});

test("Số lượng từ nhiều nhất trong dãy rỗng", () => {
  expect(handler([])).toBe("The list is empty");
});

test("Số lượng từ nhiều nhất trong dãy với các phần tử có các ký tự đặc biệt", () => {
  expect(
    handler(["Hello World ...", "I'm Son", "I am Tony", "@ @ @ @ @"])
  ).toBe(3);
});

test("Số lượng từ nhiều nhất trong dãy 1 phần tử trong đó phần tử là chuỗi rỗng", () => {
  expect(handler([""])).toBe(0);
});

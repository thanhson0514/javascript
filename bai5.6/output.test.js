const trimAll = require("./trimAll");

test("Chuỗi được xoá kí tự trắng đầu, cuối và giữa", () => {
  expect(trimAll("    hello     world    ")).toBe("hello world");
});

test("Chuỗi được xoá kí tự trắng đầu, cuối và giữa", () => {
  expect(trimAll("   I    am    good      ")).toBe("I am good");
});

test("Chuỗi được xoá kí tự trắng với chuỗi không có kí tự chỉ có mình khoảng trắng", () => {
  expect(trimAll("         ")).toBe("");
});

test("Chuỗi được xoá kí tự trắng với chuỗi có khoảng trắng ở giữa", () => {
  expect(trimAll("hello       world")).toBe("hello world");
});

test("Chuỗi được xoá kí tự trắng với chuỗi rỗng", () => {
  expect(trimAll("")).toBe("");
});

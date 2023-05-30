const handler = require("./handler");

test("Danh sách chuỗi đã sắp xếp với chuỗi ngắn nhất và sô lượng kí tự của chuỗi trong dãy bất kì", () => {
  expect(handler(["apple", "banana", "orange", "kiwi", "strawberry"])).toEqual([
    "kiwi",
    "apple",
    "orange",
    "banana",
    "strawberry",
  ]);
});

test("Danh sách chuỗi đã sắp xếp với chuỗi ngắn nhất và sô lượng kí tự của chuỗi trong dãy có tất cả các phần tử có độ dài bằng nhau", () => {
  expect(handler(["acde", "aada", "aaaa", "aeac", "adee"])).toEqual([
    "acde",
    "aeac",
    "adee",
    "aada",
    "aaaa",
  ]);
});

test("Danh sách chuỗi đã sắp xếp với chuỗi ngắn nhất và sô lượng kí tự của chuỗi với dãy không có phần tử", () => {
  expect(handler([])).toEqual("The list is empty");
});

test("Danh sách chuỗi đã sắp xếp với chuỗi ngắn nhất và sô lượng kí tự của chuỗi với dãy có 1 phần tuwrF", () => {
  expect(handler(["abc"])).toEqual(["abc"]);
});

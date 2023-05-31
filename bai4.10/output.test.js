const handler = require("./handler");

test("2 dãy con có kí tự trùng nhiều nhất mà bé hơn k với dãy bất kì", () => {
  expect(handler(["abcdef", "abzyzcdef", "zabcdefed"], 3)).toEqual([
    "abcdef",
    "abzyzcdef",
  ]);
});

test("2 dãy con có kí tự trùng nhiều nhất mà bé hơn k với dãy không có phần tử", () => {
  expect(handler([], 3)).toEqual("The list is empty");
});

test("2 dãy con có kí tự trùng nhiều nhất mà bé hơn k với dãy có 1 phần tử", () => {
  expect(handler(["abcdef"], 3)).toEqual("The list required two elements");
});

test("2 dãy con có kí tự trùng nhiều nhất mà bé hơn k với dãy có 2 phần tử", () => {
  expect(handler(["abcdefg", "abczdefg"], 3)).toEqual(["abcdefg", "abczdefg"]);
});

test("2 dãy con có kí tự trùng nhiều nhất mà bé hơn k với dãy có phần tử giống nhau với k bé hơn dãy con", () => {
  expect(handler(["abcd", "abcd", "abcd"], 2)).toEqual(
    "Not two strings with the largest overlap of substrings"
  );
});

test("2 dãy con có kí tự trùng nhiều nhất mà bé hơn k với dãy có phần tử giống nhau với k bằng dãy con", () => {
  expect(handler(["abcd", "abcd", "abcd"], 4)).toEqual(["abcd", "abcd"]);
});

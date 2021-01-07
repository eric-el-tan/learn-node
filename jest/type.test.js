const { test, expect } = require("@jest/globals");

test("typeof", () => {
  var str = "1111-11-11";
  expect(typeof str == "string").toBe(true);
  var num = 11111111;
  expect(typeof num == "number").toBe(true);
});

test("== vs ===", () => {
  var str = "22222";
  var num = 22222;
  expect(str == num).toBe(true); // convert to same type before comparison
  expect(str === num).toBe(false); // DO NOT convert to same type before comparison
});

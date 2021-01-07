const { test, expect } = require("@jest/globals");
// const sum = require("./sum");

test("match url", () => {
  //   var str = "/create-prject";
  //   var str = "/project/view/1606153897968";
  var str = "/project/view";
  expect(str.match(/project\/view/g) !== null).toBe(true);
});

test("match dateFormat by Class RegExp", () => {
  var str = "1111-11-11";
  var exp = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2}");
  expect(str.match(exp) != null).toBe(true);
});

test("match dateFormat by regular expression", () => {
  var str = "1111-11-11";
  var exp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
  expect(str.match(exp) != null).toBe(true);
});

test("not match dateFormat by regular expression", () => {
  var str = "11111111";
  var exp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
  expect(str.match(exp) != null).toBe(false);
});

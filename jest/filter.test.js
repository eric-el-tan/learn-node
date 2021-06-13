const { test, expect } = require('@jest/globals')
const [filter1, filterTruvie, filterStr] = require('../array/filter')

test('try to filter number', () => {
    expect(filter1()).toBe(true);
});

test('try to filter number with Truly', () => {
  expect(filterTruvie()).toBe(true);
});

test.only('try to filter string', () => {
  expect(filterStr()).toBe(true);
});

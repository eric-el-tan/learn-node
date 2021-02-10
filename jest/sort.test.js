const { test, expect } = require('@jest/globals')
const [sortNum,sortString, sortGraph] = require('../array/sort')

test('try to sort number', () => {
    expect(sortNum()).toBe(true);
});

test('try to sort string', () => {
    expect(sortString()).toBe(true);
});

test.only('try to sort object', () => {
    expect(sortGraph()).toBe(true);
});
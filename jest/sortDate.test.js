const { test, expect } = require('@jest/globals');
const [sortDateStr, sortDate] = require('../array/sortDate');

test.only('try to sort dateStr', () => {
    expect(sortDateStr()).toBe(true);
});

test('try to sort date', () => {
    expect(sortDate()).toBe(true);
});
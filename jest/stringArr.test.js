const { test, expect } = require('@jest/globals');
const [stringInclude, stringIndexOf] = require('../array/stringArr');

test('if a string is in the list', () => {
    expect(stringInclude()).toBe(true);
});

test.only('if a string is in the list 2', () => {
    expect(stringIndexOf()).toBe(true);
});

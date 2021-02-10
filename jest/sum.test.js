const { test, expect } = require('@jest/globals')
const sum = require('../math/sum')

test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
});
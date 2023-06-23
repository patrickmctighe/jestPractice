const mult = require('./mult');

test('Multiplies 4 * 2  to equal 8', () => {
  expect(mult(4, 2)).toBe(8);
});
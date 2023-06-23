const sub = require('./sub');

test('subtracts 4 - 2  to equal 4', () => {
  expect(sub(4, 2)).toBe(2);
});
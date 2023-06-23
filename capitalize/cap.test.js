const cap = require('./cap');

test('Capitalizes first caracter', () => {
  expect(cap("abc")).toBe("Abc");
});
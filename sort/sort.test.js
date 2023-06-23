const anArray = require('./sort');

test('Sorts a Array', () => {
  expect(anArray([1,2,3])).toStrictEqual({"average": 2, "length": 3, "max": 3, "min": 1}
  );
});

const ciph = require('./ciph');

test('Encodes message', () => {
  expect(ciph("abc")).toBe("bcd");
});

test('Encodes message', () => {
    expect(ciph("Efg")).toBe("Egh");
  });

  test('Encodes message', () => {
    expect(ciph("e.fg")).toBe("f.gh");
  });
  test('Encodes message', () => {
    expect(ciph("zab")).toBe("abc");
  });
const hammingDistance = require('./index');

test('Jewels and Stones', () => {
  expect(hammingDistance(1, 4)).toBe(2);
  expect(hammingDistance(3, 1)).toBe(1);
  expect(hammingDistance(4, 14)).toBe(2);
});

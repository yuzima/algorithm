const numJewelsInStones = require('./index');

test('Jewels and Stones', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  expect(numJewelsInStones('z', 'ZZ')).toBe(0);
});

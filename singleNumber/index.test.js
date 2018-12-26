const singleNumber = require('./index');

test('Find that single one', () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});
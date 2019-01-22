const maxSubArray = require('./index');

test('Maximum Subarray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  expect(maxSubArray([-2, -1])).toEqual(-1);
  expect(maxSubArray([-1, 1, 2, 1])).toEqual(4);
});
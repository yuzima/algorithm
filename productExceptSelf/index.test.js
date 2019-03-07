const productExceptSelf = require('./index')

test('Product of Array Except Self', () => {
  expect(productExceptSelf([1, 0])).toEqual([0 ,1]);
  expect(productExceptSelf([0, 0])).toEqual([0 ,0]);
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

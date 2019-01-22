const climbStairs = require('./index');

test('Climbing stairs', () => {
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
});
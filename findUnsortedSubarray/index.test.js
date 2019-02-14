const findUnsortedSubarray = require('./index')

test('Shortest Unsorted Continuous Subarray', () => {
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toEqual(5);
});
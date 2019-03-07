const subset = require('./index')

test('Subsets', () => {
  expect(subset([1, 2, 3])).toEqual([
    [3],
    [1],
    [2],
    [1, 2, 3],
    [1, 3],
    [2, 3],
    [1, 2],
    []
  ])
})
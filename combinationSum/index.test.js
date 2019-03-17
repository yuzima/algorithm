const combinationSum = require('./index')

test('Combination Sum', () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toEqual([
    [7],
    [2, 2, 3]
  ])
  expect(combinationSum([2, 3, 5], 8)).toEqual([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5]
  ])
})
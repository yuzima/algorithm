const rotate = require('./index')

const inMatrix =
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

const outMatrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]

const inMatrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]

const outMatrix2 = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11]
]

test('Rotate Image', () => {
  expect(rotate(inMatrix)).toEqual(outMatrix)
  expect(rotate(inMatrix2)).toEqual(outMatrix2)
})
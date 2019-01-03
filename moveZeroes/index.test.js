const moveZeroes = require('./index');

test('Merge Two Binary Trees', () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeroes([1])).toEqual([1]);
});

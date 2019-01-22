const findAnagrams = require('./index')

test('Find All Anagrams in a String', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
  expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
});
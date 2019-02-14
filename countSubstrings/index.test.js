const countSubstrings = require('./index')

test('Palindromic Substrings', () => {
  expect(countSubstrings('abc')).toEqual(3);
  expect(countSubstrings('aaa')).toEqual(6);
});

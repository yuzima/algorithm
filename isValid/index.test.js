const isValid = require('./index')

test('Valid Parentheses', () => {
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
  expect(isValid('[')).toBe(false);
});
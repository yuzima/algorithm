const generateParenthesis = require('./index')

test('Generate Parentheses', () => {
  expect(generateParenthesis(3)).toEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ])
})
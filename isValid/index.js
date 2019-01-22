/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = []
  for (let c of s) {
    if (['(', '{', '['].includes(c)) {
      stack.push(c);
    } else if ([')', '}', ']'].includes(c)) {
      const last = stack.pop()
      if (!last || brackets[last] !== c) {
        return false
      }
    }
  }
  return stack.length === 0
};

module.exports = isValid
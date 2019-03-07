/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = []
  if (n === 0) {
    arr.push('')
  } else {
    for (let i = 0; i < n; i ++) {
      for (let left of generateParenthesis(i)) {
        for (let right of generateParenthesis(n - 1 - i)) {
          arr.push(`(${left})${right}`)
        }
      }
    }
  }
  return arr
};

module.exports = generateParenthesis
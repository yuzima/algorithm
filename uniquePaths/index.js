/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(new Array(n).fill(null))
  for (let i = m - 1; i >= 0; i --) {
    for (let j = n - 1; j >=0; j --) {
      if (i == m - 1 && j == n - 1) {
        dp[i][j] = 1
      } else if (i == m - 1) {
        dp[i][j] = dp[i][j + 1]
      } else if (j == n - 1) {
        dp[i][j] = dp[i + 1][j]
      } else {
        dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
      }
    }
  }
  return dp[0][0]
}

console.log(uniquePaths(51, 9))

module.exports = uniquePaths
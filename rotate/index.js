/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j ++) {
      if (i < j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
    }
  }

  for (let line of matrix) {
    line.reverse()
  }
  return matrix
};

module.exports = rotate
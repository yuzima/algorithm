/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = [0]
  for (let i = 0; i <= num; i ++) {
    if (i % 2 === 0) {
      result[i] = result[i / 2]
    } else {
      result[i] = result[i - 1] + 1
    }
  }
  return result
};
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0, center = 0, left, right
  while (center < (2 * s.length - 1)) {
    left = Math.floor(center / 2)
    right = left + center % 2
    center += 1
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count += 1
      left -= 1
      right += 1
    }
  }
  return count
};

module.exports = countSubstrings
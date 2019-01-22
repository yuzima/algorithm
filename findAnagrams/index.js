/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = []
  if (s.length < p.length) return result;
  const hash = {}
  for (let c of p.split('')) {
    hash[c] = (hash[c] || 0) + 1
  }
  let left = 0, right = 0, count = p.length
  while (right < s.length) {
    if (hash[s[right++]]-- >= 1) count--
    if (count === 0) result.push(left)
    if (right - left === p.length && hash[s[left++]]++ >= 0) count ++
  }
  return result
};

module.exports = findAnagrams;
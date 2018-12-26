/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (typeof s !== 'string') { return 0; }
  let subStr = '', maxLength = 0;
  for (let c of s) {
    subStr = subStr.substr(subStr.indexOf(c) + 1).concat(c);
    maxLength = Math.max(subStr.length, maxLength);
  }
  return maxLength;
};

lengthOfLongestSubstring('abcabcbb');

module.exports = lengthOfLongestSubstring;
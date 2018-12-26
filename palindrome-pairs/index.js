/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const paris = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      isPalindrome((words[i] + words[j])) && paris.add([i, j]);
    }
  }

  function isPalindrome(str) {
    let start = 0, end = str.length - 1;
    while (end > start) {
      if (str[start] !== str[end]) return false;
    }
  }
};
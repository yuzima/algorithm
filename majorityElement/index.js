/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const halfLength = Math.floor(nums.length / 2);
  const hash = {};
  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
    if (hash[num] > halfLength) return num;
  }
};

module.exports = majorityElement;
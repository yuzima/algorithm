/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (nums.indexOf(complement, i + 1) > -1) {
      return [i, nums.indexOf(complement, i + 1)];
    }
    hashMap[nums[i]] = i
  }
  return null
};

module.exports = twoSum
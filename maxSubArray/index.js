/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0], currentSum = nums[0] > 0 ? nums[0] : 0;
  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > 0) {
      currentSum += nums[i];
      maxSum = Math.max(currentSum, maxSum);
    } else {
      currentSum = 0;
      maxSum = Math.max(nums[i], maxSum);
    }
  }
  return maxSum;
};

module.exports = maxSubArray;
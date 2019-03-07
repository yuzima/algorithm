/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    output[i] = nums[i - 1] * output[i - 1]
  }
  let tmp = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    tmp *= nums[i + 1]
    output[i] *= tmp
  }
  return output
};

module.exports = productExceptSelf
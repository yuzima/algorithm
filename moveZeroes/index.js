/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] != 0) {
      [nums[lastNonZeroFoundAt], nums[cur]] = [nums[cur], nums[lastNonZeroFoundAt]];
      lastNonZeroFoundAt += 1;
    }
  }
  return nums;
};

module.exports = moveZeroes;
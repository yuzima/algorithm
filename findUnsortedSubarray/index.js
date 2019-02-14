/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let stack = []
  let startIndex = nums.length,
    endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    while (!!stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      startIndex = Math.min(startIndex, stack.pop());
    }
    stack.push(i);
  }
  stack = []
  for (let i = nums.length - 1; i >= 0; i--) {
    while (!!stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      endIndex = Math.max(endIndex, stack.pop());
    }
    stack.push(i);
  }
  return endIndex - startIndex ? endIndex - startIndex + 1 : 0
};

module.exports = findUnsortedSubarray;
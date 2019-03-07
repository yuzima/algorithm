/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums.length)
    return [[]]
  const lastNum = nums.splice(nums.length - 1, 1)
  const previousSubsets = subsets(nums)
  let arr = [...previousSubsets]
  for (let subset of previousSubsets) {
    arr.push(subset.concat(lastNum))
  }
  return arr
};

module.exports = subsets
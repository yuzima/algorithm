/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [[nums[0]]]
  if (nums.length === 2) return [[nums[0], nums[1]], [nums[1], nums[0]]]
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    const copy = [ ...nums ]
    copy.splice(i, 1)
    for (let permutation of permute(copy)) {
      arr.push([nums[i]].concat(permutation))
    }
  }
  return arr
};

module.exports = permute
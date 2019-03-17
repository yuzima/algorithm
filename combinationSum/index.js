/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const sorted = candidates.sort((a, b) => a - b)

  const ret = []
  backtrack([], sorted, target, Number.NEGATIVE_INFINITY, ret)
  return ret
}

function backtrack(arr, candidates, target, lastVisited, ret) {
  const arrSum = arr.reduce((total, num) => total + num, 0)
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] < lastVisited) {
      continue
    }
    const x = arrSum + candidates[i]
    if (x == target) {
      ret.push(arr.concat(candidates[i]))
    } else if (x < target) {
      backtrack(arr.concat(candidates[i]), candidates, target, candidates[i], ret)
    }
  }
}

module.exports = combinationSum
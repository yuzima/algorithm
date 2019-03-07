/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const hashMap = {}
  let duplicateNum
  for (let num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 1
    } else {
      duplicateNum = num
      break
    }
  }
  return duplicateNum
};
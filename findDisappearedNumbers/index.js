/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = [];
  for(let i = 0; i < nums.length; i++) {
    while (i !== nums[i] - 1 && nums[i] !== 0) {
      let value = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = value === nums[nums[i] - 1] ? 0 : value;
    }
  }
  nums.forEach((value, index) => {
    if (value === 0) {
      arr.push(index + 1);
    }
  })
  return arr;
};


module.exports = findDisappearedNumbers;
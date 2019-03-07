/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = {}
  for (let num of nums) {
    hash[num] = hash[num] ? hash[num] + 1 : 1
  }
  const heap = []
  Object.keys(hash).forEach((key) => {
    heap.push({ key, value: hash[key] })
  })
  return heap.sort((a, b) => (b.value - a.value)).map(({ key }) => Number(key)).slice(0, k)
};

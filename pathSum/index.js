/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  const preSum = {};
  preSum[0] = 1;
  return helper(root, 0, sum, preSum);
};

function helper(root, currSum, target, preSum) {
  if (root == null) return 0;
  currSum += root.val;

  let res = preSum[currSum - target] || (preSum[currSum - target] = 0);

  preSum[currSum] = (preSum[currSum] || (preSum[currSum] = 0)) + 1;

  res += helper(root.left, currSum, target, preSum) + helper(root.right, currSum, target, preSum);
  preSum[currSum] = preSum[currSum] - 1;

  return res;
}


module.exports = pathSum;
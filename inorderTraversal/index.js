/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [root], result = []
  if (root === null) return result
  while (stack.length) {
    const node = stack.pop()
    if (typeof node === 'number') {
      result.push(node)
    } else {
      node.right && stack.push(node.right)
      stack.push(node.val)
      node.left && stack.push(node.left)
    }
  }
  return result
};

module.exports = inorderTraversal
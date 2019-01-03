/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 1;
  const depth = node => {
    if (!node) return 0;
    const L = depth(node.left);
    const R = depth(node.right);
    diameter = Math.max(diameter, L + R + 1);
    return Math.max(L, R) + 1;
  }
  depth(root);
  return diameter - 1;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  const tree1 = preOrder(s)
  const tree2 = preOrder(t)
  return tree1.includes(tree2)
};

function preOrder(t, left) {
  if (!t) {
    return left ? 'lnull' : 'rnull'
  }
  return `#${t.val} ${preOrder(t.left, true)} ${preOrder(t.right, false)}`
}

module.exports = isSubtree;
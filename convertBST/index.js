/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let total = 0;

var convertBST = function (root) {
  total = 0;
  const convert = function (root) {
    if (root) {
      convert(root.right);
      total += root.val;
      root.val = total;
      convert(root.left);
    }
    return root
  }
  return convert(root);
}




module.exports = convertBST;
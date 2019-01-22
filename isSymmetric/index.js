/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  const q = [];
  q.push(root.left);
  q.push(root.right);
  while(q.length) {
    const t1 = q.pop();
    const t2 = q.pop();
    if (t1 == null && t2 == null) continue;
    if (t1 == null || t2 == null) return false;
    if (t1.val != t2.val) return false;
    q.push(t1.left);
    q.push(t2.right);
    q.push(t1.right);
    q.push(t2.left);
  }
  return true;
};

module.exports = isSymmetric;
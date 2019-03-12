/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  return root ? Math.max(...dfs(root)) : 0
};

function dfs (root) {
  const [got_left, no_left] = root.left ? dfs(root.left) : [0, 0]
  const [got_right, no_right] = root.right ? dfs(root.right) : [0, 0]
  return [root.val + no_left + no_right, Math.max(
    got_left + got_right,
    got_left + no_right,
    no_left + no_right,
    no_left + got_right
  )]
}

module.exports = rob
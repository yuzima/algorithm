/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []
  if (!root) return result
  let queue = [root]

  while (queue.length) {
    const levelNodes = [ ...queue ]
    queue = []
    const arr = []
    for (let node of levelNodes) {
      arr.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(arr)
  }
  console.log(result)
  return result
};

module.exports = levelOrder
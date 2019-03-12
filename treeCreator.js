function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function treeCreator(values) {
  let root = null
  return insertLevelOrder(values, root, 0)
}

function insertLevelOrder(arr, root, i) {
  if (i < arr.length && arr[i]) {
    const temp = new TreeNode(arr[i])
    root = temp

    // insert left child
    root.left = insertLevelOrder(arr, root.left,
      2 * i + 1)

    // insert right child
    root.right = insertLevelOrder(arr, root.right,
      2 * i + 2)
  }
  return root
}

function inOrder(root) {
  if (root != null) {
    inOrder(root.left)
    console.log(root.val + ' ')
    inOrder(root.right)
  }
}

module.exports = treeCreator
const inorderTraversal = require('./index')

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(1)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3)

test('Binary Tree Inorder Traversal', () => {
  expect(inorderTraversal(tree)).toEqual([1, 3, 2]);
});
const isSymmetric = require('./index');

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.right = new TreeNode(3);
tree.left.right = new TreeNode(3);

test('Symmetric Tree', () => {
  expect(isSymmetric(tree)).toBe(true);
  expect(isSymmetric(tree2)).toBe(false);
});

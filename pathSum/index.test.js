const pathSum = require('./index');

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(10);

tree.left = new TreeNode(5);
tree.right = new TreeNode(-3);

tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(2);
tree.right.right = new TreeNode(11);


tree.left.left.left = new TreeNode(3);
tree.left.left.right = new TreeNode(-2);
tree.left.right.right = new TreeNode(1);

test('Path Sum III', () => {
  expect(pathSum(tree)).toEqual(3);
});
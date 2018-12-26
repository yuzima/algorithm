const { maxDepth, TreeNode } = require('./index');

const t1 = new TreeNode(3);
t1.left = new TreeNode(9);
t1.right = new TreeNode(20);
t1.right = new TreeNode(20);
t1.right.left = new TreeNode(15);
t1.right.right = new TreeNode(7);

test('Merge Two Binary Trees', () => {
  expect(maxDepth(t1)).toEqual(3);
});
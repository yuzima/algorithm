const { mergeTrees, TreeNode } = require('./index');

const t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);

const t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);

const t3 = new TreeNode(3);
t3.left = new TreeNode(4);
t3.right = new TreeNode(5);
t3.left.left = new TreeNode(5);
t3.left.right = new TreeNode(4);
t3.right.right = new TreeNode(7);


test('Merge Two Binary Trees', () => {
  expect(mergeTrees(t1, t2)).toEqual(t3);
});
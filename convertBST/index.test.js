const convertBST = require('./index');

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(5);
tree.left = new TreeNode(2);
tree.right = new TreeNode(13);

const convertedTree = new TreeNode(18);
convertedTree.left = new TreeNode(20);
convertedTree.right = new TreeNode(13);

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(0);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(-4);
tree2.left.right = new TreeNode(1);

const convertedTree2 = new TreeNode(5);
convertedTree2.left = new TreeNode(6);
convertedTree2.right = new TreeNode(3);
convertedTree2.left.left = new TreeNode(2);
convertedTree2.left.right = new TreeNode(6);

const tree3 = new TreeNode(2);
tree3.left = new TreeNode(1);
tree3.right = new TreeNode(3);

const convertedTree3 = new TreeNode(5);
convertedTree3.left = new TreeNode(6);
convertedTree3.right = new TreeNode(3);

test('Reverse Linked List', () => {
  expect(convertBST(tree)).toEqual(convertedTree);
  expect(convertBST(tree2)).toEqual(convertedTree2);
  expect(convertBST(tree3)).toEqual(convertedTree3);
});

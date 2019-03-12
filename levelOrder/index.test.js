const levelOrder = require('./index')
const treeCreator = require('../treeCreator')

const tree = treeCreator([3, 9, 20, null, null, 15, 7])

test('Binary Tree Level Order Traversal', () => {
  expect(levelOrder(tree)).toEqual([
    [3],
    [9, 20],
    [15, 7]
  ])
})
const rob = require('./index')
const treeCreator = require('../treeCreator')

const tree1 = treeCreator([3, 2, 3, null, 3, null, 1])
const tree2 = treeCreator([3, 4, 5, 1, 3, null, 1])

test('House Robber III', () => {
  expect(rob(tree1)).toBe(7);
  expect(rob(tree2)).toBe(9);
});
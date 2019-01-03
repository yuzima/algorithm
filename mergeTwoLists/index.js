/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let mergedList = (head = new ListNode(null));
  while (l1 && l2) {
    if (l1.val < l2.val) {
      mergedList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      mergedList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    mergedList = mergedList.next;
  }
  mergedList.next = l1 || l2;
  return head.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = mergeTwoLists;
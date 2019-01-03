/**
  Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let pointer = head.next;
  head.next = null;
  while (pointer) {
    const tmp = pointer.next;
    pointer.next = head;
    head = pointer;
    pointer = tmp;
  }
  return head;
};

module.exports = reverseList;
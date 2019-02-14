/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true
  let prev = head, cur = null
  while (prev.next) {
    cur = prev.next;
    cur.previous = prev;
    prev = cur;
  }
  let first = head, last = cur
  while (first.next) {
    if (first.val !== last.val) {
      return false
    } else {
      first = first.next
      last = last.previous
    }
  }
  return true
};

module.exports = isPalindrome;
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
var hasCycle = function (head) {
  if (!head || !head.next) return false
  let pointA = head, pointB = head.next
  while (pointA !== pointB) {
    if (pointB == null || pointB.next == null) {
      return false
    }
    pointA = pointA.next
    pointB = pointB.next.next
  }
};

module.exports = hasCycle
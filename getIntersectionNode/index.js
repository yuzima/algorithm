/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pointerA = headA, pointerB = headB, samePoint = null
  while (true) {
    if (pointerA === pointerB) {
      samePoint = pointerA
      break
    }

    if (pointerA && 'next' in pointerA) {
      pointerA = pointerA.next;
    } else {
      pointerA = headB;
    }

    if (pointerB && 'next' in pointerB) {
      pointerB = pointerB.next;
    } else {
      pointerB = headA;
    }
  }
  return samePoint
};

module.exports = getIntersectionNode;
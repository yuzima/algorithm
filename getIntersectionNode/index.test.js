const getIntersectionNode = require('./index');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const headA = new ListNode(4)
const headB = new ListNode(5)

const intersection = new ListNode(8)
intersection.next = new ListNode(4)
intersection.next.next = new ListNode(5)

headA.next = new ListNode(1)
headA.next.next = intersection

headB.next = new ListNode(0)
headB.next.next = new ListNode(1)
headB.next.next.next = intersection

const headC = new ListNode(2)
headC.next = new ListNode(6)
headC.next.next = new ListNode(4)

const headD = new ListNode(1);
headD.next = new ListNode(5);

test('Intersection of Two Linked Lists', () => {
  expect(getIntersectionNode(headA, headB)).toEqual(intersection);
  expect(getIntersectionNode(headC, headD)).toEqual(null);
});

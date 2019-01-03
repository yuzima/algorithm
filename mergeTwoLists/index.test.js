const mergeTwoLists = require('./index')

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const l3 = new ListNode(1);
l3.next = new ListNode(1);
l3.next.next = new ListNode(2);
l3.next.next.next = new ListNode(3);
l3.next.next.next.next = new ListNode(4);
l3.next.next.next.next.next = new ListNode(4);

test('Merge Two Sorted Lists', () => {
  expect(mergeTwoLists(l1, l2)).toEqual(l3);
});
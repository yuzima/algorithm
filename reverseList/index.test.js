const reverseList = require('./index');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const reversedList = new ListNode(5);
reversedList.next = new ListNode(4);
reversedList.next.next = new ListNode(3);
reversedList.next.next.next = new ListNode(2);
reversedList.next.next.next.next = new ListNode(1);

test('Reverse Linked List', () => {
  expect(reverseList(list)).toEqual(reversedList);
});

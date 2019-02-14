const isPalindrome = require('./index')

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const list = new ListNode(1);
list.next = new ListNode(2);

const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(2);
list2.next.next.next = new ListNode(1);

test('Palindrome Linked List', () => {
  expect(isPalindrome(list)).toBe(false);
  expect(isPalindrome(list2)).toBe(true);
});
const remove = function (head, val) {
  if (!head) return null;

  let current = head;
  let previous = head;

  while (current) {
    if (current.val !== val) {
      previous = current;
      current = current.next;
    } else {
      current = current.next;
      previous.next = previous;
    }
  }
  return head;
};

console.log(remove([1, 2, 6, 3, 4, 5, 6], 6));

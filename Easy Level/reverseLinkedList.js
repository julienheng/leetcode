const reverseLL = function (head) {
  let node = head;
  let current;
  let previous;
  let next;

  while (node) {
    current = node.next;
    node.next = previous;
    previous = node;
    node = current;
  }
  return previous;
};

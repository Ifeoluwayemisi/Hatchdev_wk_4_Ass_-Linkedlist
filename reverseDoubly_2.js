"use strict";
class DoublyListNode {
    constructor(data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}
function reverseDoublyList(head) {
    let current = head;
    let next = null;
    while (current !== null) {
        // swap next and prev
        next = current.prev;
        current.prev = current.next;
        current.next = next;
        // move to next node (which is now the previous node)
        current = current.prev;
    }
    // return new head
    return next ? next.prev : null;
}
const list2 = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log("Original:", list.toArray());
list.reverse();
console.log("Reversed:", list.toArray());

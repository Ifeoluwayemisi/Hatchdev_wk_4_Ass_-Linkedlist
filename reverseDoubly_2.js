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

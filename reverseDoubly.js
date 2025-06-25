"use strict";
class DoublyNode {
    constructor(data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }
    // Reversed
    reverse() {
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.prev;
            current.prev = current.next;
            current.next = next;
            current = current.prev; //moved to the previous next
        }
        if (next !== null) {
            this.head = next.prev;
        }
    }
    //print
    toArray() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log("Original:", list.toArray());
list.reverse();
console.log("Reversed:", list.toArray());

"use strict";
class doublyCircularNode {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}
class doublyCircularList {
    constructor() {
        this.head = null;
    }
    // Append to the end
    append(data) {
        const newNode = new doublyCircularNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
            return;
        }
        const tail = this.head.prev;
        tail.next = newNode;
        newNode.prev = tail;
        newNode.next = this.head;
        this.head.prev = newNode;
    }
    //convert to array (to avoid infinite loop)
    toArray(limit = 10) {
        const result = [];
        if (!this.head)
            return result;
        let current = this.head;
        let count = 0;
        do {
            result.push(current.data);
            current = current.next;
            count++;
        } while (current !== this.head && count <= limit);
        return result;
    }
}
const dlist = new doublyCircularList();
dlist.append(100);
dlist.append(200);
dlist.append(300);
dlist.append(400);
dlist.append(500);
console.log("doubly Circular List:", dlist.toArray(9));

"use strict";
class SinglyNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class CircularSingleList {
    constructor() {
        this.head = null;
    }
    //ADD to the end
    append(data) {
        const newNode = new SinglyNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode; // bck to itself
            return;
        }
        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head; // point to head to make it circular
    }
    Array(limit = 10) {
        const result = [];
        if (!this.head)
            return result;
        let current = this.head;
        let count = 0;
        do {
            result.push(current.data);
            current = current.next;
            count++;
        } while (current !== this.head && count < limit);
        return result;
    }
}
const slist = new CircularSingleList();
slist.append(10);
slist.append(20);
slist.append(30);
slist.append(40);
slist.append(45);
slist.append(50);
slist.append(60);
console.log("Circular List:", slist.Array(10));

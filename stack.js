"use strict";
class DoublyNodes {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}
class DoublyList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // Append (Add to the end)
    append(data) {
        const newNode = new DoublyNodes(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            this.head = this.tail = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    // Prepend (add to start)
    prepend(data) {
        const newNode = new DoublyNodes(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    // Remove from end
    removeTail() {
        if (!this.tail)
            return null;
        const value = this.tail.data;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return value;
    }
    // Remove from start
    removeHead() {
        if (!this.head)
            return null;
        const value = this.head.data;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return value;
    }
    // for viewing content
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}
class Stack {
    constructor() {
        this.list = new DoublyList;
    }
    push(value) {
        this.list.append(value); // TO INSERT AT END
    }
    pop() {
        return this.list.removeTail(); // REMOVE FROM END
    }
    toArray() {
        return this.list.toArray();
    }
}
class Queue {
    constructor() {
        this.list = new DoublyList();
    }
    enqueue(value) {
        this.list.append(value); // insert at end
    }
    dequeue() {
        return this.list.removeHead(); //remove from head
    }
    toArray() {
        return this.list.toArray();
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack:", stack.toArray());
stack.pop();
console.log("Stack after pop:", stack.toArray());
const queue = new Queue();
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
console.log("Queue:", queue.toArray());
queue.dequeue();
console.log("Queue after dequeue:", queue.toArray());

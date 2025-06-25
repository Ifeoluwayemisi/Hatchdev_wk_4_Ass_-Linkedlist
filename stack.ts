class DoublyNodes{
    data: Number;
    next: DoublyNodes | null = null;
    prev: DoublyNodes | null = null;

    constructor (data: number) {
        this.data = data;
    }
}


class DoublyList {
    head: DoublyNodes | null = null;
    tail: DoublyNodes | null= null;


// Append (Add to the end)
append (data: number): void{
    const newNode = new DoublyNodes(data);

    if (!this.head) {
        this.head = this.tail =newNode;
    } else {
        this.head = this.tail = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
} 
    // Prepend (add to start)
    prepend(data: number): void{
        const newNode = new DoublyNodes(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Remove from end

    removeTail(): Number | null{
        if(!this.tail) return null;

        const value = this.tail.data;

        if(this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev!;
            this.tail.next = null;
        }

        return value;
    }

    // Remove from start
    removeHead(): Number | null {

        if (!this.head) return null;
        const value = this.head.data;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next!;
            this.head.prev = null;
        }
        return value;
    }

    // for viewing content
    toArray(): Number[] {
        const result : Number[] = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

class Stack {
    private list = new DoublyList;

    push  ( value: number): void {
        this.list.append(value); // TO INSERT AT END
    }

    pop(): Number | null {
        return this.list.removeTail(); // REMOVE FROM END
    }

    toArray(): Number[] {
        return this.list.toArray();
    }
}

class Queue {
    private list = new DoublyList();

    enqueue(value: number): void{
        this.list.append(value); // insert at end
    }

    dequeue(): Number | null {
        return this.list.removeHead(); //remove from head
    }

    toArray(): Number []{
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

class DoublyNode {
    data: number;
    prev: DoublyNode | null = null;
    next: DoublyNode | null = null;

    constructor (data: number) {
        this.data = data;
    }
}

class DoublyLinkedList {
    head: DoublyNode | null = null;
    tail: DoublyNode | null = null;

    append(data: number): void {
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
    reverse(): void {
        let current = this.head;
        let next: DoublyNode | null = null;

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
    toArray(): number[] {
        let current = this.head;
        const result: number[] = [];
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


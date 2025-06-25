class doublyCircularNode{
    data : number;
    next : doublyCircularNode | null= null;
    prev: doublyCircularNode | null= null;

    constructor (data: number){
        this.data = data
    }
}

class doublyCircularList{
    head: doublyCircularNode | null=null;

    // Append to the end

    append(data: number): void{
        const newNode = new doublyCircularNode(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
            return;
        }
        const tail = this.head.prev!;
        tail.next = newNode;
        newNode.prev = tail;

        newNode.next = this.head;
        this.head.prev = newNode;
    }

    //convert to array (to avoid infinite loop)

    toArray(limit: number = 10): number[] {
        const result: number[] = [];
        if (!this.head) return result;

        let current = this.head;
        let count=0;

        do {
            result.push(current.data);
            current = current.next!;
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
console.log("doubly Circular List:", dlist.toArray(9))
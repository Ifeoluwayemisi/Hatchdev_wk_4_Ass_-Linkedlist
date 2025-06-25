class SinglyNode{
    data: number;
    next: SinglyNode | null = null;

    constructor(data: number) {
        this.data = data;
    }
}

 class CircularSingleList{
    head: SinglyNode | null= null;

    //ADD to the end

    append(data: number): void{
        const newNode =  new SinglyNode(data);

        if(!this.head)  {
            this.head = newNode;
            newNode.next = newNode; // bck to itself
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next!;
        }

        current.next = newNode;
        newNode.next = this.head; // point to head to make it circular
    }

        Array(limit: number = 10): number[] {
            const result: number[] = [];

            if (!this.head) return result;

            let current = this.head;
            let count = 0;

            do {
                result.push(current.data);
                current = current.next!;
                count++;
            } while (current !== this.head && count < limit);

            return result;
 }
}

const slist = new CircularSingleList();
slist.append(10);
slist.append(20);
slist.append(30);
slist.append(35);
slist.append(40);
slist.append(50);

console.log("Circulr List:", slist.Array());

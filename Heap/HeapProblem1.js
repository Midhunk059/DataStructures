// A JavaScript program to print all values
// smaller than a given value in Binary
// Heap

class MinHeap {
    constructor(capacity){
        this.harr = new Array(capacity); // array of elements in heap
        this.capacity = capacity; // maximum possible size of min heap
        this.heap_size = 0; // Current no. of elements.
    }
 
    parent(i) { return parseInt((i - 1) / 2); }
    left(i) { return (2 * i + 1); }
    right(i) { return (2 * i + 2); }

    printSmallerThan(x, pos)
    {
        if (pos >= this.heap_size)
            return;
 
        if (this.harr[pos] >= x) {
            return;
        }
 
        document.write(this.harr[pos] , " ");
 
        this.printSmallerThan(x, this.left(pos));
        this.printSmallerThan(x, this.right(pos));
    }
    swap(x, y)
    {
        let temp = this.harr[x];
        this.harr[x] = this.harr[y];
        this.harr[y] = temp;
    }

    insertKey(k)
    {
        if (this.heap_size == this.capacity) {
            System.out.println("Overflow: Could not insertKey");
            return;
        }
        this.heap_size++;
        let i = this.heap_size - 1;
        this.harr[i] = k;
 
        while (i != 0 && this.harr[this.parent(i)] > this.harr[i]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }
 
}
 
let h = new MinHeap(15);
h.insertKey(3);
h.insertKey(2);
h.insertKey(15);
h.insertKey(5);
h.insertKey(4);
h.insertKey(45);
h.insertKey(80);
h.insertKey(6);
h.insertKey(150);
h.insertKey(77);
h.insertKey(120);

let x = 100;
h.printSmallerThan(x, 0);
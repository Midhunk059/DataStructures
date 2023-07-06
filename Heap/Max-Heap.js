//imlmentation of maxheap
class MaxHeap {
    constructor(maxSize) {
        this.arr = new Array(maxSize).fill(null);
        this.maxSize = maxSize;
        this.heapSize = 0;
    }
    display()
    {
        for(let i=0;i<this.heapSize;i++)
        {
            console.log(this.arr[i])
        }
    }
    MaxHeapify(i) {
        const l = this.lChild(i);
        const r = this.rChild(i);
        let largest = i;
        if (l < this.heapSize && this.arr[l] > this.arr[i]) {
            largest = l;
        }
        if (r < this.heapSize && this.arr[r] > this.arr[largest]) {
            largest = r;
        }
        if (largest !== i) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[largest];
            this.arr[largest] = temp;
            this.MaxHeapify(largest);
        }
    }
 
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    lChild(i) {
        return 2 * i + 1;
    }

    rChild(i) {
        return 2 * i + 2;
    }
 
    removeMax() {
        if (this.heapSize <= 0) {
            return null;
        }
        if (this.heapSize === 1) {
            this.heapSize -= 1;
            return this.arr[0];
        }
 
        const root = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize -= 1;
        this.MaxHeapify(0);
 
        return root;
    }
    increaseKey(i, newVal) {
        this.arr[i] = newVal;
        while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }
    getMax() {
        return this.arr[0];
    }
 
    curSize() {
        return this.heapSize;
    }
    deleteKey(i) {
        this.increaseKey(i, Infinity);
        this.removeMax();
    }
 
    insertKey(x) {
      
        if (this.heapSize === this.maxSize) {
            console.log("\nOverflow: Could not insertKey\n");
            return;
        }
 
        let i = this.heapSize;
        this.arr[i] = x;
 
        this.heapSize += 1;
 
        while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }
}
 
const h = new MaxHeap(15);
 
console.log("Entered 6 keys:- 3, 10, 12, 8, 2, 14 \n");
 
h.insertKey(3);
h.insertKey(10);
h.insertKey(12);
h.insertKey(8);
h.insertKey(2);
h.insertKey(14);
h.display()
 
console.log("The current size of the heap is " + h.curSize() + "\n");
console.log("The current maximum element is " + h.getMax() + "\n");

h.deleteKey(2);
console.log("The current size of the heap is " + h.curSize() + "\n");

h.insertKey(15);
h.insertKey(5);
console.log("The current size of the heap is " + h.curSize() + "\n");
console.log("The current maximum element is " + h.getMax() + "\n");
 
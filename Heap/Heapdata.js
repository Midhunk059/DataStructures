class Heap{
    constructor(size)
    {
      this.arr=new Array(size).fill(null)
      this.size=size
      this.heapIndex=0
    }

    parent(i)
    {
      return (Math.trunc((i-1)/2))
    }
    lchild(i)
    {
      return ((2*i)+1)
    }
    rchild(i)
    {
      return ((2*i)+2)
    }
   

    remove()
    {
     let index=0
     this.arr[0]=this.arr[this.heapIndex-1]
     while(index < this.parent(this.heapIndex-1))
     {
      if(this.arr[this.lchild(index)] < this.arr[this.rchild(index)] && this.arr[this.lchild(index)]<this.arr[index])
      {
        // console.log('hi')
        let tempo=this.arr[index]
        this.arr[index]=this.arr[this.lchild(index)]
        this.arr[this.lchild(index)]=tempo
        index=this.lchild(index)
      }
      else if(this.arr[this.lchild(index)] > this.arr[this.rchild(index)] && this.arr[this.rchild(index)] < this.arr[index])
      {
        // console.log('hi')
        let tempo=this.arr[index]
        this.arr[index]=this.arr[this.rchild(index)]
        this.arr[this.rchild(index)]=tempo
        index=this.rchild(index)
      }
     }
    }

    insert(data)
    {
      
      if(this.size === this.heapIndex)
      {
        console('Heap is in Overflow Error')
        return
      }
      let i=this.heapIndex
      this.arr[i]=data
      this.heapIndex += 1
      // let t= Math.trunc((2-1)/2)
      // console.log('t is',t)
      while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) 
      {
        // console.log('hi')
        let temp = this.arr[i];
        this.arr[i] = this.arr[this.parent(i)];
        this.arr[this.parent(i)] = temp;
        i = this.parent(i);
      }
      // if(i>1)
      // {
      //   // console.log('hi')
      //   while(i>1 && this.arr[i] < this.arr[this.parent(i)])
      //   {
      //     console.log('hi')
      //     temp=this.arr[i]
      //     this.arr[i]=this.arr[this.parent(i)]
      //     this.arr[this.parent(i)]=temp
      //     i=this.parent(i)
      //   }
      // }
      
    }
   
    display()
    {
      for(let i=0;i<this.heapIndex;i++)
      {
        console.log(this.arr[i])
      }
    }

}

let heap1=new Heap(6)

heap1.insert(3)
heap1.insert(10)
heap1.insert(12)
heap1.insert(8)
heap1.insert(2)
heap1.insert(14)

// heap1.display()
heap1.remove()
heap1.display()

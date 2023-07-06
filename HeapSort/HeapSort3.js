function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arra[j];
    arr[j] = temp;
}
 
function buildMaxHeap(arr, n) {
    for(let i=1;i<n;i++)
    {
        if (arr[i] > arr[(i - 1) / 2])
        {
            let j = i;
     
     
            while (arr[j] > arr[(j - 1) / 2])
            {
                swap(arr,j,(j-1)/2);
                j = (j - 1) / 2;
            }
        }
    }
}
  
 
function heapSort(arr, n) {
     
    buildMaxHeap(arr,n);
    for (let i = n - 1; i > 0; i--)
    {
        swap(arr,0,i);
        let j = 0, index;
         
        do
        {
            index = (2 * j + 1);
            
            if (arr[index] < arr[index + 1] && index < (i - 1))
            index++;
         
            if (arr[j] < arr[index] && index < i)
                swap(arr, j, index);
         
            j = index;
         
        } while (index < i);
    }
}
  
let arr = [10, 20, 15, 17, 9, 21];
 
let n = arr.length;
 
console.log("Given array : ");
for (let i = 0; i < n; ++i)
        console.log(arr[i]+" ");
         
heapSort(arr,n);

console.log("Sorted array : ");
for (let i = 0; i < n; ++i)
        console.log(arr[i]+" ");
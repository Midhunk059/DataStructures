function maxDistinctNum(a, n, k)
{
  let i;
  let s = [];
        for(i=0;i<n;i++){
            if(!s.includes(a[i])||k==0)
            s.push(a[i]);
            else
            {
                k--;
            }
        }
   
        if(k!=0)
            return s.size-k;
        else{
            var st = new Set();
            s.forEach(element => {
                st.add(element);
            });
             
            return st.size;
        }
}

let arr = [5, 7, 5, 5, 1, 2, 2];
let n = arr.length;
let k = 3;
console.log("Maximum distinct elements = " +  maxDistinctNum(arr, n, k));
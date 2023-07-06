// JavaScript program to connect n
// ropes with minimum cost

function minCost(arr,n)
{

        let pq = [];
   
        for (let i = 0; i < n; i++) {
            pq.push(arr[i]);
        }   
           
        pq.sort(function(a,b){return a-b;});
        let res = 0;

        while (pq.length > 1) {
            let first = pq.shift();
            let second = pq.shift();
            pq.push(first + second);
            pq.sort(function(a,b){return a-b;});
        }
   
        return res;
}

let len = [4, 3, 2, 6];
let size = len.length;
console.log("Total cost for connecting" + " ropes is " + minCost(len, size));
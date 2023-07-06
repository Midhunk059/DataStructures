// program to find the maximum weight with given prefix.
     
    // Return the maximum weight of
    // string having given prefix.
    function maxWeight(str, weight, n, prefix)
    {
        let ans = -1;
        let check;
        for (let i = 0; i < n; i++)
        {
            check = true;
   
            for (let j=0, k=0; j < str[i].length &&
                     k < prefix.length; j++, k++)
            {
                if (str[i][j] != prefix[k])
                {
                    check = false;
                    break;
                }
            }
 
            if (check)
                ans = Math.max(ans, weight[i]);
        }
   
        return ans;
    }
     
    let n = 3;
    let str = ["geeks", "geeksfor", "geeksforgeeks"];
    let weight = [15, 30, 45];
    let prefix = "geek";
 
    console.log(maxWeight(str, weight, n, prefix));
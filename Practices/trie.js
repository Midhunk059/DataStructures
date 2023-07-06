class Trie{
   constructor()
   {
     this.TrieMap=new Map()
   }
}

let end='*'
let root=new Trie()
function buildTrie(str)
{   
    let node=root
    for(let i=0;i<str.length;i++)
    {
        let letter=str[i]
      if(!node.TrieMap.has(letter))
      {
        let newNode=new Trie()
        node.TrieMap.set(letter,newNode)
      } 
       node=node.TrieMap.get(letter)
    }
    node.TrieMap.set(end,null) 
}

function search(key)
{
    let node=root
    for(let i=0;i<key.length;i++)
    {
        if(!node.TrieMap.has(key[i]))
        {
           return false
        }
        node=node.TrieMap.get(key[i])
    }
    return node.TrieMap.has(end) 
}

let a=buildTrie('manna')

console.log(search('manna'))



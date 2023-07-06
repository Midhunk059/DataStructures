class Trie
{
    constructor()
    {
        this.TrieMap=new Map()
    }
}

let root=new Trie()

function insert(str)
{
    let node=root
    for(let i=0;i<str.length;i++)
    {
        if(!node.TrieMap.has(str[i]))
        {
            let newTrie=new Trie()
            node.TrieMap.set(str[i],newTrie)
        }
        nod

    }
}

insert('abcd')
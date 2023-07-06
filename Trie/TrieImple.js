let ALPHABET_SIZE = 26;
 
// trie node
class TrieNode
{
    constructor()
    {
        this.isEndOfWord = false;
        this.children = new Array(ALPHABET_SIZE);
        for (let i = 0; i < ALPHABET_SIZE; i++)
            this.children[i] = null;
    }
}
 
let root;

function insert(key)
{
    let level;
        let length = key.length;
        let index;
       
        let pCrawl = root;
       
        for (level = 0; level < length; level++)
        {
            index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
            if (pCrawl.children[index] == null)
                pCrawl.children[index] = new TrieNode();
       
            pCrawl = pCrawl.children[index];
        }
       
        // mark last node as leaf
        pCrawl.isEndOfWord = true;
}

function search(key)
{
    let level;
        let length = key.length;
        let index;
        let pCrawl = root;
       
        for (level = 0; level < length; level++)
        {
            index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
       
            if (pCrawl.children[index] == null)
                return false;
       
            pCrawl = pCrawl.children[index];
        }
       
        return (pCrawl.isEndOfWord);
}

let keys = ["the", "a", "there", "answer", "any",
                 "by", "bye", "their"];
 
let output = ["Not present in trie", "Present in trie"];
 
 
root = new TrieNode();
 
let i;
for (i = 0; i < keys.length ; i++)
    insert(keys[i]);
 
if(search("the") == true)
    console.log("the --- " + output[1]);
else
    console.log("the --- " + output[0]);
 
if(search("these") == true)
    console.log("these --- " + output[1]);
else
    console.log("these --- " + output[0]);
 
if(search("their") == true)
    console.log("their --- " + output[1]);
else
    console.log("their --- " + output[0]);
 
if(search("thaw") == true)
    console.log("thaw --- " + output[1]);
else
    console.log("thaw --- " + output[0]);
 
let ALPHABET_SIZE = 26;
 
// trie node
class TrieNode
{
    constructor()
    {
        this.children=new Array(ALPHABET_SIZE);
        this.isEndOfWord=false;
    }
}
 
function insert(root,key)
{
    let pCrawl = root;
  
        for (let i = 0; i < key.length; i++) {
            let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (pCrawl.children[index] == null)
                pCrawl.children[index] = new TrieNode();
  
            pCrawl = pCrawl.children[index];
        }
  
        // mark last node as leaf
        pCrawl.isEndOfWord = true;
}

function search(root,key)
{
    let pCrawl = root;
  
        for (let i = 0; i < key.length; i++) {
            let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (pCrawl.children[index] == null)
                return false;
  
            pCrawl = pCrawl.children[index];
        }
  
        return (pCrawl != null && pCrawl.isEndOfWord);
}
 
function isEmpty(root)
{
    for (let i = 0; i < ALPHABET_SIZE; i++)
            if (root.children[i] != null)
                return false;
        return true;
}

function remove(root,key,depth)
{
    // If tree is empty
        if (root == null)
            return null;
  
        if (depth == key.length) {

            if (root.isEndOfWord)
                root.isEndOfWord = false;
  
            if (isEmpty(root)) {
                root = null;
            }
  
            return root;
        }
  
        let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
        root.children[index] =
            remove(root.children[index], key, depth + 1);
  
        if (isEmpty(root) && root.isEndOfWord == false){
            root = null;
        }
  
        return root;
}

let keys = [ "the", "a", "there",
                 "answer", "any", "by",
                 "bye", "their", "hero", "heroplane" ];
let n = keys.length;
 
let root = new TrieNode();
 
for (let i = 0; i < n; i++)
    insert(root, keys[i]);

if(search(root, "the"))
    console.log("Yes");
else
    console.log("No");
 
if(search(root, "these"))
    console.log("Yes");
else
    console.log("No");
 
remove(root, "heroplane", 0);
 
if(search(root, "hero"))
    console.log("Yes");
else
    console.log("No");
//Find last unique URL from long list of URLs in single traversal

const ALPHABET_SIZE = 256; 

class DLLNode {
    constructor(data) { 
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
 
class TrieNode {
    constructor() {
        this.children = new Array(ALPHABET_SIZE).fill(null); 
        this.isLeaf = false;
        this.LLptr = null;  
    }
}
 
function push(head_ref, new_data) {
    const new_node = new DLLNode(new_data); 
 
    new_node.next = head_ref;
    if (head_ref !== null) {
        head_ref.prev = new_node;
    }
 
    head_ref = new_node; 
    return head_ref;
}

function deleteNode(head_ref, del_node) {
   
    if (head_ref === null || del_node === null) {
        return;
    }
 
    if (head_ref === del_node) {
        head_ref = del_node.next;
    }
 
    if (del_node.next !== null) {
        del_node.next.prev = del_node.prev;
    }
 
    if (del_node.prev !== null) {
        del_node.prev.next = del_node.next;
    }
 
    return head_ref;
}
 
function getNewTrieNode() {
    const pNode = new TrieNode();
 
    pNode.isLeaf = false;
    pNode.LLptr = null;
 
    return pNode;
}
 

function insert(root, key, head) {
    let pCrawl = root; 

    for (let level = 0; level < key.length; level++) {
        const index = key.charCodeAt(level); 

        if (pCrawl.children[index] === null) {
            pCrawl.children[index] = getNewTrieNode();
        }
 
        pCrawl = pCrawl.children[index]; 
    }

    if (pCrawl.isLeaf) {

        if (pCrawl.LLptr !== null) {
            head = deleteNode(head, pCrawl.LLptr);
        }
        pCrawl.LLptr = null;
    } else {
        //mark last node as leaf
        pCrawl.isLeaf = true;
 
        //insert to linked list
        head = push(head, key);
        pCrawl.LLptr = head;
    }
 
    return head;
}
 
//list of URLs
const urls = [
    "https://www.midhun.com",
    "http://write.midhun.org",
    "http://www.midhun.org",
    "http://qa.midhun.org",
    "https://practice.midhun.org",
    "https://ide.midhun.org",
    "http://www.midhun.org",
    "https://practice.midhun.org",
    "https://ide.midhun.org",
    "http://www.midhun.org",
    "http://qa.midhun.org",
    "https://practice.midhun.org"
];
 
const root = getNewTrieNode(); 
let head = null; 

for (const url of urls) {
    head = insert(root, url, head);
}
 
console.log(head.data);
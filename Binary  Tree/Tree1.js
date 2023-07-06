// construction of BST from preorder traversal
 
// A binary tree node
 
 
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
 
function getPreIndex(){
    return constructTreeUtil.preIndex
}
 
function incrementPreIndex(){
    constructTreeUtil.preIndex += 1
}

function constructTreeUtil(pre, low, high){
    if(low > high)
        return null

    let root = new Node(pre[getPreIndex()])
    incrementPreIndex()
    if(low == high)
        return root
 
    let r_root = -1

    for(let i=low;i<high+1;i++){
        if (pre[i] > root.data){
            r_root = i
            break
        }
    }
 
    if(r_root == -1)
        r_root = getPreIndex() + (high - low)
    root.left = constructTreeUtil(pre, getPreIndex(), r_root-1)
 
    root.right = constructTreeUtil(pre, r_root, high)
 
    return root
}

function constructTree(pre){
    let size = pre.length
    constructTreeUtil.preIndex = 0
    return constructTreeUtil(pre, 0, size-1)
}
 
function printInorder(root){
    if(root == null)
        return
    printInorder(root.left)
    document.write(root.data,' ')
    printInorder(root.right)
}
 
let pre = [10, 5, 1, 7, 40, 50]
 
let root = constructTree(pre)
 
printInorder(root)
 
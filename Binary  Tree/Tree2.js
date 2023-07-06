// program to transform
// a BST to sum tree

class Node
{
    constructor(item)
    {
        this.data = item;
        this.left=null;
        this.right=null;
    }
}
 
let sum = 0;
let Root;
 
function transformTreeUtil(root)
{
     
    if (root === null)
      return;

    transformTreeUtil(root.right);
    sum = sum + root.data;
    root.data = sum - root.data;
    transformTreeUtil(root.left);
}

function transformTree(root)
{
    transformTreeUtil(root);
}
 
function printInorder(root)
{
    if (root == null)
          return;
           
    printInorder(root.left);
     
    document.write(root.data + " ");
    printInorder(root.right);
}

Root = new Node(11);
Root.left = new Node(2);
Root.right = new Node(29);
Root.left.left = new Node(1);
Root.left.right = new Node(7);
Root.right.left = new Node(15);
Root.right.right = new Node(40);
Root.right.right.left = new Node(35);
 
console.log("Inorder Traversal of given tree");
printInorder(Root);
 
transformTree(Root);
console.log("Inorder Traversal of " + "transformed tree");
printInorder(Root);
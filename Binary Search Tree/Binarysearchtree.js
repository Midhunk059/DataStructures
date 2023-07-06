class Node{
    constructor(data)
    {
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinarySearchTree
  {
    constructor()
    {
        this.root=null
        this.iter=null
        this.parent=null
    }
    createNode(data)
    {
        let newNode=new Node(data)

        if(this.root === null)
        {
            this.root=newNode
        }
        else
        {
          this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode)
    {
        if(root.data<newNode.data)
        {
            if(root.left===null)
            {
             root.left=newNode   
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else
        {
            if(root.right===null)
            {
             root.right=newNode   
            }
            else
            {
             this.insertNode(root.right,newNode)
            }
        }
    }
    delete(data)
    {
       this.root=this.removeHeleper(this.root,data)
    }

    inorder(root)
    {
        if(root!==null)
        {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }
    preorder(root)
    {
        if(root!==null)
        {
            console.log(root.data)
            this.inorder(root.left)
            this.inorder(root.right)
        }
    }
    postorder(root)
    {
        if(root!==null)
        {
            this.inorder(root.left)
            this.inorder(root.right)
            console.log(root.data)
        }
    }
  }

function removeHeleper(root,key)
  {
    if(key<root.data)
    {
        root.left=removeHeleper(root.left,key)
        return root
    }
    else if(key>root.data)
    {
        root.right=removeHeleper(root.right,key)
        return root
    }
    else
    {
        if(root.left === null && root.right === null)
        {
            root=null
            return root
        }
        else if(root.left !== null && root.right === null)
        {
            root=root.left
            return root
        }
        else if(root.left === null && root.right !== null)
        {
            root=root.right
            return root
        }
        else if(root.left !== null && root.right !== null)
        {
           let min=findMin(root.right) 
           root.data=min.data

           removeHeleper(min,root.data)
        }
    }
  }

  function findMin(node)
  {
     if(node.left === null)
     {
        return node
     }
     else
     {
        return findMin(node.left)
     }
  }

  let tree=new BinarySearchTree()

  tree.createNode(15)
  tree.createNode(10)
  tree.createNode(25)
  tree.createNode(7)
  tree.createNode(13)
  tree.createNode(22)
  tree.createNode(27)
  tree.createNode(5)
  tree.createNode(9)
  tree.createNode(17)

//   tree.delete(25)
  tree.inorder(tree.root)
class Node
{
    constructor(data)
    {
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
   constructor()
   {
    this.root=null
   }

   BuildBinary(data)
   {
    let newNode=new Node(data)
    
    if(this.root===null)
    {
        this.root=newNode
    }

    while(true)
    {
        let node=this.root
        if(newNode.data<node.data)
        {
            if(node.left===null)
            {
                node.left=newNode
            }
            else{
                node=node.left
            }
        }
        else
        {
            if(node.right===null)
            {
                node.right=newNode
            }
            else{
                node=node.right
            }
        }
    }
   
   }
   
   contains(data)
   {
    let node=this.root

    while(node !== null)
    {
        if(node.data<data)
        {
            node=node.left
        }
        else if(node.data>data)
        {
            node=node.right
        }
        else
        {
            console.log('The Item Found')
        }
    }
   }

   remove(data)
   {
    let parent=null
    let node=this.root
    while(node!==null)
    {
    if(node.data<data)
    {
        parent=node
        node=node.left
    }
    else if(node.data>data)
    {
        parent=node
        node=node.right
    }
    else
    {
        this.removeHelper(data,node,parent)
    }
    }
   }

   removeHelper(node,parent)
   {
       
       if(node.left !== null && node.right !== null)
       {   
        let min=this.getmin(node.right)
        node.data=min.data
        
        this.removeHelper(node.right,node)
       }
       else
       {
        if(parent===null)
        {

        }
       }
   }
   getmin(node)
   {
    if(node.left===null)
    {
        return node
    }
    else{
        this.getmin(node.left)
    }
   }
}
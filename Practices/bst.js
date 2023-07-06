class Node{
    constructor(data)
    {
        this.data=data
        this.left=null
        this.right=null
    }
}
class BinarSearchTree{
    constructor()
    {
        this.root=null
    }

    createTree(data)
    {
        let newNode=new Node(data)

        if(this.root===null)
        {
            this.root=newNode
        }
        while(true)
        {
            let node=this.root
            if(newNode.data < node.data)
            {
                if(node.left===null)
                {
                    node.left=newNode
                }
                else
                {
                    node=node.left
                }

            }
            else
            {
                if(node.left===null)
                {
                    node.left=newNode
                }
                else
                {
                    node=node.left
                } 
            }
        }

    }
}
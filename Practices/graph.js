class Graph
{
    constructor()
    {
        this.GraphMap=new Map()
    }
}
let GraphObject=new Graph() 

function addVertex(data)
{
    
    GraphObject.GraphMap.set(data,new Array())
}

function insert(vertex,edge,isBidirectional)
{
       if(!GraphObject.GraphMap.has(vertex))
       {
        addVertex(vertex)
       }
       if(!GraphObject.GraphMap.has(edge))
       {
        addVertex(edge)
       }
       GraphObject.GraphMap.get(vertex).push(edge)

       if(isBidirectional)
       {
        GraphObject.GraphMap.get(edge).push(vertex)
       }
}

function display()
{
    for (let i in [...GraphObject.GraphMap.keys()])
    {
        console.log([...GraphObject.GraphMap.keys()][i]+':')
            console.log(GraphObject.GraphMap.get([...GraphObject.GraphMap.keys()][i]))
    }
}

insert(5,3,true)
insert(3,5,true)
display()


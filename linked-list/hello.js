class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linked{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1
    }

    append(value){
        const newnode = new node(value)
        this.tail.next=newnode
        this.tail =newnode
        this.length++
 
    }

    prepend(value){
        const newnode = new node(value)
        newnode.next=this.head
        this.head=newnode
        this.length++
    }
    travers(index){
        let current=this.head
        let count=1
        while(count!=index){
           current=current.next 
        }
        return current
    }
    insert(index,value){
        const newnode = new node(value)
        const leader = this.travers(index-1)
        let valueholder=leader.next
        leader.next =newnode
        newnode.next=valueholder
        this.length++
    }
    remove(index){
        let leader=this.travers(index-1)
        let unwantednode=leader.next
        leader.next=unwantednode.next
        this.length--

    }
}

const a =new linked(10)
a.append(20)
a.prepend(30)
a.remove(2)
// a.insert(2,15)

console.log(a);
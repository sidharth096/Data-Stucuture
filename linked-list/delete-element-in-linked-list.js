class node{
    constructor(value){
        this.value=this.value
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
    }
    append(value){
        const newnode=new node(value)
        this.tail.next=newnode
        this.tail=newnode
    }
}
const a=new linked(10)

a.append(20)
console.log(a);
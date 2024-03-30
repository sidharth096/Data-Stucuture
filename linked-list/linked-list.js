class node{
    constructor(value){
    this.value=value;
    this.next=null;
    this.head=null;
    this.tail=null;

}
}
class linkedlist{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1;
    }
    append(value){
        const newnode=new node(value)
        this.tail.next=newnode
        this.tail=newnode
        this.length++

    }

}
const my=new linkedlist(10)
my.append(20)
my.append(30)
my.append(40)


console.log(my);
class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class queue{
    constructor(){
        this.start=null
        this.end=null
    }
    inqueue(value){
        const newnode=new node(value)
        if(this.start==null){
            this.start=newnode
            this.end=newnode
        }
        else{
            this.end.next=newnode
            this.end=newnode
        }
    }
    dequeue(){
        this.start=this.start.next   
    }
    display(){
      let current=this.start
      while(current!=null){
        console.log(current.value);
        current=current.next
      }  
    }
}
const a =new queue()
a.inqueue(10)
a.inqueue(20)
a.inqueue(30)
a.dequeue()
// a.dequeue()
console.log(a);
a.display()
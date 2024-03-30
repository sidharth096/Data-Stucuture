class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.first=null
        this.last=null
    }
    push(value){
    const newnode =new node(value)
    if(this.first==null){
        this.first=newnode
        this.last=newnode
    }
    else{
       newnode.next=this.first
       this.first=newnode
    }
    }
    display(){
     const aa=new stack()   
    let current=this.first
    while(current!=null){
        console.log(current.value);
        aa.push(current.value)
        current=current.next   
    
     }
     return aa
    }
   
  
        
 }


const a=new stack()
a.push(10)
a.push(20)
a.push(30)
queue=a.display()
queue.display()
console.log(a);
console.log(queue);
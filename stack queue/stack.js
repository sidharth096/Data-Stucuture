class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null
    }
    push(value){
        const newnode=new node(value)
        if (this.top==null){
            this.top=newnode
        }
        else{
            newnode.next=this.top
            this.top=newnode
        }
    }
    pop(){
        if(this.top==null){
            console.log("stack underflow");
        }
        else{
            this.top=this.top.next
        }
    }
    display(){
        let currentnode=this.top
        while(currentnode!=null){
            console.log(currentnode.value);
            currentnode=currentnode.next
        }
    }
}
const a=new stack()
a.push(10)
a.push(20)
a.push(30)
a.push(40)
a.pop()
a.pop()
console.log(a);
a.display()

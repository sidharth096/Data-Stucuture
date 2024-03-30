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
    //adding-last
    append(value){
        const newnode=new node(value)
        this.tail.next=newnode
        this.tail=newnode
        this.length++
    }
       
    print(){
        // const arr=[]
        let currentnode =this.head
        while(currentnode !== null){
           console.log(currentnode)
            currentnode=currentnode.next
        }
        // return arr
    }
    deleteoneafterone(){
       let currentnode=this.head
       console.log(currentnode.value);
       while(currentnode!=null&&currentnode.next!=null){
        currentnode.next=currentnode.next.next
        currentnode=currentnode.next
        if(currentnode!=null){
        console.log(currentnode.value);
        this.tail=currentnode
        }
        this.length--

       }

    }
}
const k=new linked(10)
k.append(20)
k.append(30) 
k.append(80) 
k.append(38) 
k.append(390) 
// k.append(990) 

// k.print()

k.deleteoneafterone()
console.log(k);


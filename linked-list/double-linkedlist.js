class node{
    constructor(value){
      this.value=value
      this.next=null  
      this.prev=null     
    }
}

class linked{
    constructor(val){
        this.head={
            value:val,
            next:null,
            prev:null
        }
        this.tail=this.head
         this.length=1
    }
    //adding-last
    append(value){
        const newnode=new node(value)
        newnode.prev=this.tail
        this.tail.next=newnode
        this.tail=newnode
        this.length++

    }
    //prepent-adding first
    prepent(value){
        const newnode=new node(value)
        newnode.next=this.head
        this.head.prev=newnode
        this.head=newnode
        this.length++
       
    }

//insert
    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }
        const newnode= new node(value)
        const leader= this.traverse(index-1)
        const valueholder= leader.next
        leader.next= newnode
        newnode.prev=leader
        newnode.next= valueholder
        this.length++
    }
    traverse(index){
            let count=1;
            let currentnode=this.head
            while(count!== index){
                currentnode= currentnode.next
                count++ 
            }
            return currentnode
    }
    remove(index){
        const leader=this.traverse(index-1)
        let unwantednode=leader.next
        leader.next=unwantednode.next
        let hello=leader.next
        hello.prev=leader
        this.length--
  
    } 


    
    print(){
        const arr=[]
        let currentnode =this.head
        while(currentnode !== null){
            arr.push(currentnode.value)
            currentnode=currentnode.next
        }
        return arr
    }
    reverse(){
        let currentnode=this.tail
        while(currentnode!=null){
            console.log(currentnode.value);
            let temp=currentnode.next
            currentnode.next=currentnode.prev
            currentnode.prev=temp
            currentnode=currentnode.next
        }
        this.tail=this.head
        this.head=this.tail
    }

}
const k=new linked(10)
k.append(20)
k.append(30) 
// k.prepent(12)
// k.insert(20,34)
// k.insert(2,02)
// k.remove(5)
// k.remove(2)
console.log(k);
x=k.print()
console.log(x);
k.reverse()
console.log(k);
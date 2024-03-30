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
    //prepent-adding first
    prepent(value){
        const newnode=new node(value)
        newnode.next=this.head
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
        this.length--
  
    } 
    reverse() {
        let hai= this.head;
        let current = this.head;    
        let prev = null;
        let next = null;
        while (current) {
          next = current.next;
          current.next = prev; 
          prev = current;
          current = next;
        }
        this.head = prev;
        this.tail=hai
        return this
    }
    reverse1(){
       let currentnode=this.head
       let pre=null
       let next=null
       while(currentnode!=null){
        next=currentnode.next
        currentnode.next=pre
        pre=currentnode
        currentnode=next

       }
       this.tail=this.head 
       this.head=pre
       return this

    }
    
    print(){
        // const arr=[]
        let currentnode =this.head
        while(currentnode !== null){
           console.log(currentnode.value)
            currentnode=currentnode.next
        }
        // return arr
    }
}
const k=new linked(10)
k.append(20)
k.append(30) 

// k.prepent(12)
k.insert(20,34)
k.insert(2)
k.remove(2)
// k.remove(2)
// console.log(k);
k.print()
// console.log( k.reverse());
console.log(k.reverse1());
k.print()

// console.log(k.print());
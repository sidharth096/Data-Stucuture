class node{
    constructor(value){
      this.value=value
      this.next=null       
    }
}

class linked{
    constructor(val){
        this.head={
            value:val,
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
           console.log(currentnode.value)
            currentnode=currentnode.next
        }
    }
    deleteduplicate(){
        let firstnode=this.head
        while(firstnode !=null){

            let secondnode=firstnode.next
            while(secondnode!=null && firstnode.value==secondnode.value) {
                secondnode=secondnode.next

            } 
            firstnode.next=secondnode
            if(secondnode==this.tail && firstnode.value==secondnode.value){
                this.tail=firstnode
                this.tail.next=null
            }
            firstnode=secondnode 
            
        }
     
     }
     duplicateRemove(){
        let current=this.head;
        let obj={};
 
        obj[current.value]=true;
        while(current.next!==null){
            if(obj[current.next.value]){
                current.next=current.next.next;
                this.length--;
            }
            else{
                obj[current.next.value]=true;
                current=current.next;
            }
        }
        return this.print();
    }
}
const k=new linked(10)
k.append(1)
k.append(5)
k.append(2) 
k.append(1)
k.append(3)
k.append(2)
k.append(2)
k.append(2)
//k.deleteduplicate()
//console.log(k);

k.duplicateRemove()
//k.print()

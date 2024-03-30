class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linked{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    arrlinked(array){
        for(let i=0;i<array.length;i++){
            const newnode=new node(array[i])    
            if(this.head==null){
                this.head=newnode
                this.tail=this.head
                this.length++

            }
            else{
                this.tail.next=newnode
                this.tail=newnode
                this.length++
            }
        
        }
    }
    deletlement(element){
        let currentnode=this.head
        if(this.head!=null&&currentnode.value==element){
            this.head=currentnode.next

            this.length--
        }
        else{
            while(currentnode!=null&&currentnode!=this.tail){
                if(currentnode.next.value==element){
                    if(currentnode.next==this.tail){
                        this.tail=currentnode
                    }
                    currentnode.next=currentnode.next.next
                    currentnode=currentnode.next
                    this.length--
                  
                }
                else{
                    currentnode=currentnode.next
                }
            }
        }


    }
    print(){
        let currentnode=this.head
        while(currentnode!=null){
            console.log(currentnode.value);
            currentnode=currentnode.next
        }
    }
    insert(index,value){
        const newnode=new node(value)
        let leader=this.traverse(index-1)
        let temp=leader.next
        leader.next=newnode
        newnode.next=temp


    }
    traverse(index){
        let container=this.head
        let count=1
        while(count!=index){
            container=container.next
            count++
        }
        return container
    }







    // append(value){
    //     const newnode=new node(value)
    //     if(this.head==null){
    //         this.head=newnode
    //         this.tail=this.head
    //     }
    //     else{
    //         this.tail.next=newnode
    //         this.tail=newnode
    //     }
    // }
    // traverse(){
    //     let currentnode=this.head
    //     while(currentnode.next!=this.tail){
    //         currentnode=currentnode.next 
    //     }
    //     return currentnode 
    // }
    // taildel(){
    //     let leader=this.traverse()
    //     leader.next=null
    //     this.tail=leader
    // }
}
array=[10,20,30,40,50]
const d=new linked()
d.arrlinked(array)
// d.append(10)
// d.append(20)
// d.append(30)
// d.append(40)
// d.taildel()
d.deletlement(20)
d.insert(3,35)
console.log(d);
d.print()

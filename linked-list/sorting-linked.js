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
     }
     append(value){
        const newnode=new node(value)
        if(this.head==null){
            this.head=newnode
            this.tail=this.head
        }
        else{
            this.tail.next=newnode
            this.tail=newnode
        }
     }
     print(){
        let currentnode=this.head
        while(currentnode!=null){
            console.log(currentnode.value);
            currentnode=currentnode.next
        }
    }
    sort(){
        let currentnode=this.head
        let secnode
        while(currentnode!=null){
            secnode =currentnode.next
            while(secnode!=null){
                if(currentnode.value>secnode.value){
                    let temp=currentnode.value
                    currentnode.value=secnode.value
                    secnode.value=temp
                }
                secnode=secnode.next 

            }
            currentnode=currentnode.next

        }
    }
    deletelement(element){    
        let currentnode=this.head
        if (this.head!= null && this.head.value==element){
            this.head=currentnode.next
        }else{

            while(currentnode!=null){
                if(currentnode.next.value==element){
                    currentnode.next=currentnode.next.next
                    break
                }else{
                    currentnode=currentnode.next
                }
               
            }
        }
       
    }
    // deletelement1(value){
    //     let currentnode=this.head
    //     let prev=null
    //     if(currentnode!=null&&currentnode.value==value){
    //         this.head=currentnode.next
    //         return
    //     }
    //     while(currentnode!=null&&currentnode.value!=value){
    //         prev=currentnode
    //         currentnode=prev.next
    //     }
    //     if(currentnode==null){
    //         return null
    //     }
    //     prev.next=currentnode.next
    // }
 }
   

const a=new linked()
a.append(10)
a.append(5)
a.append(20)
a.append(40)
a.append(5)
// console.log(a);
a.sort()


// a.deletelement(40)
// a.deletelement(10)


// a.deletelement1(5)
a.print()

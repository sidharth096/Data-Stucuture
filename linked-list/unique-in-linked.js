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
    unique(){
        const a=new Set()
        let array=[]
        let k=0
        let currentnode=this.head
        while(currentnode!=null){
            if(a.has(currentnode.value)){
                array[k]=currentnode.value
                k++
            }
            else{
                a.add(currentnode.value)
            }
            currentnode=currentnode.next
        }
        for(let i=0;i<array.length;i++){
            if(a.has(array[i])){
                a.delete(array[i])
            }
        }
        console.log(a)
       
    }
 

}
const a=new linked()
a.append(10)
a.append(20)
a.append(30)
a.append(20)
// console.log(a);
// a.print()
a.unique()
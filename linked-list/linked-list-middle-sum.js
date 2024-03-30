class Node{
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
        if(this.head==null){
            const node= new Node(value)
            this.head=node
            this.tail=this.head
            return this
        }
        const node= new Node(value)
        this.tail.next=node
        this.tail=node
    }
    sum(){
        let firstnode=this.head
        let sum=0
        while(firstnode!=null){
            sum=sum+firstnode.value
            firstnode=firstnode.next
        }
        return sum
    }
    middl(){
        let slownode=this.head
        let speednode=this.head.next
        let sum=0
        while(speednode.next!=null&& speednode==null){
            slownode=slownode.next
            speednode=speednode.next.next  
        }
        return slownode.value
    }

}
const a=new linked()
a.append(10)
a.append(40)
a.append(10)
// a.append(30)
// a.append(50)
// a.append(50)
// a.append(60)

// console.log(a.sum());
console.log(a.middlesum());
class node{
    constructor(data){
      this.value=data
      this.next=null
     } 
}
class linked{
  constructor(arr){
    this.head=null
    this.tail=null

    for(let i=0;i<arr.length;i++){
    const nod=new node(arr[i])
      if(!this.head){
        this.head=nod
        this.tail=nod
      }
      else{
      this.tail.next=nod
      this.tail=nod
      }
    }
  }
}
let arr=[1,2,3,4,5]
const g=new linked(arr)
console.log(g);
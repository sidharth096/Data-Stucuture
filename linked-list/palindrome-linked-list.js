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
    }
    appent(value){
        const newnode=new node(value)
        this.tail.next=newnode
        this.tail=newnode
    }

    palindrome(){
        let arr=[]
        let currentnode=this.head
        while(currentnode!=null){
            arr.push(currentnode.value)
            currentnode=currentnode.next
        }
        let length=arr.length/2
        for(let i=0;i<length;i++){
            if(arr[i]!=arr[arr.length-1-i]){
                return "not palindrome"
            }
        }
            return "palindrome"
        


    }


    
}
const h=new linked(10)
h.appent(20)
h.appent(10)
h.appent(20)
h.appent(10)
console.log(h);
console.log( h.palindrome()); 
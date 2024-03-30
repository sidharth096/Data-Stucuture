class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null
    }
    push(value){
        const newnode=new node(value)
        if (this.top==null){
            this.top=newnode
        }
        else{
            newnode.next=this.top
            this.top=newnode
        }
    }
    string(){
        let string=""
        let current=this.top
        while(current!=null){
          string+=(current.value)
          current=current.next
        }
        return string
    }
      

}

    const a=new stack()
    a.push("a")
    a.push("b")
    a.push("c")
    s=a.string()
    console.log(s);
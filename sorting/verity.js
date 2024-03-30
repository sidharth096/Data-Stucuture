 class node{
    constructor(value){
        this.value=value
    }
 }
 class stack{
    constructor(){
        this.top=null
    }
    push(value){

        const newnode =new node(value)
        if(this.top==null){
            this.top=newnode
        }
        else{
        newnode.next=this.top
        this.top=newnode
        }
    }
    pop(){
        let n=this.top.value
       this.top=this.top.next 
        return n
    }
    insert(value)
    {
        if(value=='c'){
            let a=this.pop()
            let b=this.pop()
            this.push(a*b)
            
        }else if(value=='d'){
            var c=this.pop()
            c=c+5;
            this.push(c);
        }else if(value=='+'){
            var d=this.pop()
            d=d*2;
            this.push(d);
        }else{
            this.push(value);
        }
    }

  }
  const a= new stack()

  a.insert(2)
  a.insert(5);
  a.insert('c');
  a.insert('d');
  a.insert('+')
  console.log(a);
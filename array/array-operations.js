class array{
    constructor(){
    this.length=0
    this.arr=[]
    }
    push(value){
        this.arr[this.length]=value
        this.length++    
    }
    pop(){
         //let lastnode=this.arr[this.length-1]
        delete this.arr[this.length-1]
        this.length--
    }

}

const s=new array()
s.push(10)   
s.push(20)
// s.pop()
console.log(s);



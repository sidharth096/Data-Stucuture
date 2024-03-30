// let string=("sidharth")
// let a=string.split('').reverse().join('')
// console.log(a);


function hello(str){
    if(!str||str.length<2||typeof str !=='string'){
        console.log("invalid value");
        return this
    }
    g=""
    for(i=str.length-1;i>=0;i--){
        g+=str[i]
    }
    console.log(g);
      
    
}
hello('sidharth')
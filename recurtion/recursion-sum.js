let result=0
function sum(n){
    if(n==0){
       return result
    }
   
    return n+sum(n-1)
    
}
result=sum(10)
console.log(result);

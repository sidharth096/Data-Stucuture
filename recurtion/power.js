const prompt= require("prompt-sync")();
let num=prompt("enter the number:")
function power(){
  if(num==1){
    return true
  }
  else if(num<1){
    return false
  }
  num=num/2
  return power(num)
}
console.log(power());


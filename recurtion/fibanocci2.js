const prompt = require("prompt-sync")();
let a=prompt("enter the number:")
function fibanocci(a){
    if(a==0){
        return 0
    }
    else if(a<=2&&a>=1){
        return 1;
    }
    return fibanocci(a-1)+fibanocci(a-2)
}
var x=fibanocci(a)
console.log(x)
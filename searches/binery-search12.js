

const a = require("prompt-sync")();
arr=[1,2,3,4,5,6,7,8]
console.log(arr);
const value= a("enter the value:")
index=binary(arr,value)
if(index>=0){
    console.log(`value found at position ${index} index`);
}
else{
console.log("value not found");
}



function binary(arr,value){
    let start=0
    let end=arr.length-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(value==arr[mid]){
            return mid
        }
        else if(value<arr[mid]){
            end=mid-1
        }
        else{
            start=mid+1
        }
    }
    return -1
}
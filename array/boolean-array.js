let arr=[2,3,5,1,3]
let element=3
let large=0
let array=[]
for(i=0;i<arr.length;i++){
    if(arr[i]>large){
        large=arr[i]
    }
}
for(i=0;i<arr.length;i++){
    if(3+arr[i]>=large){
        array.push(true)
    }
    else{
        array.push(false)
    }
}
console.log(array);
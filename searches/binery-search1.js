function c(arr,target){
    let mid=Math.floor(arr.length/2)
    if(target == arr[mid]){
          return mid
    }
    else if(target > arr[mid]){
        for(i=mid;i<arr.length;i++){
            if(target==arr[i]){
                return i
            }
        }
    }
    else if(target < arr[mid]){
        for(i=0;i< mid;i++){
            if(target==arr[i]){
                return i
            }
        }
    }
    return 'invalid number'
}
let array=[1,2,3,4,5,6]
target=5

let index=c(array,target)
console.log(index);
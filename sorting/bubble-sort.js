arr=[1,6,23,6,34,22]
sortarray=bubble(arr)
console.log(sortarray);


function bubble(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1  ;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
            
    }
    return arr
            
}

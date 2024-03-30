arr=[7,6,23,1,34,22]
console.log(arr);
sortarray=insertion(arr)
console.log(sortarray);


function insertion(arr){
     for(i=1;i<arr.length;i++){
        var current=arr[i]
        var j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
     }
     return arr
}   
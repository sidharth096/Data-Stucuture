
function unique(arr) {
    const a=new Set()
    
    let arr1=[]
    let k=0
    for(i=0;i<arr.length;i++){
        if(a.has(arr[i])){
            arr1[k]=(arr[i])
            k++

        }
        else{
            a.add(arr[i])
        }
    }
    for(i=0;i<arr1.length;i++){
        if(a.has(arr1[i])){
            a.delete(arr1[i])
        }
    }
    console.log(a);
}
unique([1,2,3,3,2,4,5])




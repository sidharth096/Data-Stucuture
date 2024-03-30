function unique(arr){
    let n
    for(i=0;i<arr.length;i++){
        n=0
        for(j=0;j<arr.length;j++){
            if(arr[i]==arr[j]&&i!=j){
                n++
            }
        }
        if(n==0){
            console.log((arr[i]));
         }
    
    }
}
arr=[1,2,3,2,4,3,3,5]
unique(arr)



// //usinf one for loop
// function dup(arr){  
//   obj={}
//     obj[arr[0]]=true
//     for(i=0;i<arr.length;i++){
//         if(!obj[arr[i+1]]){
//             obj[arr[i+1]]=true
//         }
//     }
//     console.log(obj);

// }
// arr=[1,2,3,2,4,3,5]
// dup(arr)

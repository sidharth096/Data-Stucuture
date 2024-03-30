arr=[1,2,1,1,1,6,3,4,2,4]
const a = new Set();
const b= new Set();

dup=[] 
for(i=0;i<arr.length;i++){
    if(a.has(arr[i])){
        b.add(arr[i])
    }
        a.add(arr[i])
    
}
console.log(b);





// function duplicates(arr) {
//     let duplicates = [];
//     let hashTable = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       if (hashTable[arr[i]]) {
//         duplicates.push(arr[i]);
//       } else {
//         hashTable[arr[i]] = true;
//       }
//     }
  
//     return duplicates;
//   }
//   arr=[1,2,1,5,3,6,2,5,5]
//   let x=duplicates(arr)
//   console.log(x);
// //bubble sort
 
// let arr=[54,3,4,566,0,-2,3,56,8]
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr);


// // insertion sort

// let arr=[2,43,88,5,9,434,-8,0]
// for(i=0;i<arr.length;i++){
//     j=i
//     current=j+1
//     while(j>=0 && arr[j]>arr[current]){
//         [arr[j],arr[current]]=[arr[current],arr[j]]
//         j--
//         current=j+1
//     }

// }
// console.log(arr);

 

// //quicksort

// function quickSort(array) {
   
//     if (array.length <= 1) {
//       return array;
//     } else {
//       const pivot = array[0];  
//       const left = [];
//       const right = [];
  
//       for (let i = 1; i < array.length; i++) {
//         if (array[i] < pivot) {
//           left.push(array[i]);
//         } else {  
//           right.push(array[i]);
//         } 
//     }
      
//     console.log("left=",left);
//     console.log("right=",right);
  
//       return quickSort(left).concat(pivot, quickSort(right));
//     }
//   }


//  const unsortedArray = [6,7,4,0,8,2,10,12];
//   const sortedArray = quickSort(unsortedArray);
//   console.log(sortedArray); 
  


// // merge sort

// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     else{
//         let middle=Math.floor(arr.length/2)
//         let left=arr.slice(0,middle)
//         let right=arr.slice(middle)
         

//         let leftsort= mergesort(left)
//         let rightsort= mergesort(right)
       
        
//         return merge (leftsort,rightsort)
          
//     }
// }
// function merge(left,right){
//     let result=[]
//     let i=0;
//     let j=0;
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i])
//             i++
//         }
//         else{
//             result.push(right[j])
//             j++
//         }
//     }
//     while(i<left.length){
//         result.push(left[i])
//         i++
//     }
//     while(j<right.length){
//         result.push(right[j])
//         j++
//     }
//     return result
// }

 
// arr=[2,43,1,56,70,3,6]
// let a=mergesort(arr)
// console.log(a);


// //selection sort

// arr=[2,1,3,5,2,3]
// for(i=0;i<arr.length-1;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//         }
//     }
// }
// console.log(arr);



class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        else{
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]==key){
                    this.table[index][i][1]=value
                    return
                }
            }

        }
        this.table[index].push([key,value])
        return
    }
    get(key){
        const index=this.hash(key)
        for(i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]==key){
                return this.table[index][i][1]
            }
        }
    }
    display(){
        for(let i=0;i<this. table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    } 
}

const table= new hashtable(50)
table.set("name","sidharth")
table.set("age","22")
table.set("age","26")
table.set("33","849")
table.display()
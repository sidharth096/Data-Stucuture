arr=[1,2,3,4,5,6,7,3,4]
sum=0
let mid=Math.round(arr.length/2)
for(i=mid-1;i<=mid+1;i++){
     sum=sum+i
}
console.log(sum);
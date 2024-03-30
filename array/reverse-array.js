// function reverse(arr)
// {
//     let array=[]
//     for( i= arr.length-1;i>=0;i--)
//     {
//      array.push(arr[i])
//     }
//     return array

// }
// var arr=[5,9,3,6,10]
// var a=reverse(arr)
// console.log(a);




//another model

function reverse(arr)
{
    let array=[]
    let j=0
    for( i=arr.length-1 ;i>=0;i--)
    {

       array[j]=arr[i]
       j++
   
    }
    console.log(array);

}
var arr=[5,9,3,6,10]
reverse(arr)

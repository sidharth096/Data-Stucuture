function x(target,arr)
{
    var set = new Set();
    for(i=0;i<arr.length;i++){   
     set.add(arr[i]) 
     var num =arr[i]
     var match =target-num
     if(set.has(match))
     {
        return[match,num]
     }

    }
} 
var target= 10
var arr=[1,2,6,,4,3]
result=x(target,arr)
console.log(result);
 
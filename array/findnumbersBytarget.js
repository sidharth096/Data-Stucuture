function x(target,arr)
{
    for(i=0;i<5;i++)
    {
        for(j=i+1;j<5;j++)
        {
           if(arr[i]+arr[j]==target)
           {
            return [arr[i],arr[j]]
           }
        }
    }
}
var target= 10
var arr=[1,2,6,4,3]
values =x(target,arr)
console.log(values);
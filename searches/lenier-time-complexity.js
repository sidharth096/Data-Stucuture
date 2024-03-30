function x(n)
{
    sum=0
    for(i=1;i<n;i++)//in using for loop many itration is working based on the input so the time compexity is increase
    {
        sum=sum+i
    }
    return sum
}
 sum=x(10)
 console.log(sum);
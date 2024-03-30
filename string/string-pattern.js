const a=require('prompt-sync')();
let str=a("enter the string:")
let d
for(i=0;i<str.length;i++){
    d=""
    for(j=0;j<=i;j++){
        d+=str[j]
    }
    console.log(d);
}

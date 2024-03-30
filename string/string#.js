let str1 = "ab#c" 
let str2 = "ad#e#f#g#c"


let a = str1.split("")
let b = str2.split("")
console.log(a);


for(let i=0; i<a.length-1; i++){
    if(a[i+1]== "#"){
        a.splice(i,2)
       // i-=2
       i=i-2
    }
}
console.log('a = ',a)
for(let i=0; i<b.length-1; i++){
    if(b[i+1]== "#"){
        b.splice(i,2)
        //i-=2
        i=i-2
    }
}
console.log('b = ',b)


str1 = a.join("")
str2 = b.join("")
   
function compare(a,b){
    if(a === b){
        console.log("The are equal");
    }else{
        console.log("Not Equal");
    }
}

compare(str1,str2)
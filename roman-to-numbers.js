let rom="XI"
let h={
'I': 1,
'V': 5,
'X': 10,
'L': 50,
'C': 100,
'D': 500,
'M': 1000
}
let result=0
for (let i = 0; i < rom.length; i++) {
 let first = h [rom.charAt(i)];
 let second=h[rom.charAt(i+1)];
 if(second>first){
    result += second - first;
    i++;
  } 
  else {
    result += first
}



}
console.log(result);



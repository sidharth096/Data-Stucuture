let array = [1,44,55,63,21,100,8,11]
let f=find(array)
console.log(f);

function find(array){
  if(array[0]>array[1])
  {
    let lar = array[0]
    let sec = array[1]
  }
  else{
    lar  = array[1]
    sec  = array[0]
  }
  for(let i = 2; i<array.length; i++){
    if(array[i]>sec){
      if(array[i]>lar){
        sec = lar
        lar = array[i]
      }
      else {
        sec = array[i]
      }
    }
}
return sec
}

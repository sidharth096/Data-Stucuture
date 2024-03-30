class HashTable{
    constructor(size){
        this.table=new Array(size);
    }
  
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i));
        }
        return hash%this.table.length;
    }

    display(){

        console.log(this.table);
    }

  
    set(key,value){ 
        let index=this._hash(key);
        if(!this.table[index]){
            this.table[index]=[];
        }else{
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] == key) {
                  this.table[index][i][1] = value;
                  return;
                }
              }  
        }
        this.table[index].push([key,value]);
        return  
    }
 
    get(key){ 
        let index=this._hash(key);
        let currentBucket=this.table[index];
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1];
                } 
            }
        }
    }
}
  
const h=new HashTable(3);
h.set("ccdf",40)
h.set("fsd",50)
h.set("anu",20)
h.set("ad",10)
h.set("bc",30)
console.log(h.get("ad"));
h.display()
// h.keys()
// console.log("----------------");
// h.values()
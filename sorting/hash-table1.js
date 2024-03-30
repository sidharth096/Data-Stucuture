class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        else{
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]==key){
                    this.table[index][i][1]=value
                    return
                }
            }
        }
        this.table[index].push([key,value])
        return
    }
    get(key){
        const index=this.hash(key)
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]==key){
             return this.table[index][i][1]  
            }
        }
    }
    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const table=new hashtable(50)
table.set("name","sidharth")
table.set("4","22")
table.set("neam","dd")
table.display()

console.log(table.get("neam"));

class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class bst{
    constructor(){
        this.root=null
    }
    insert(value){
        const newnode=new node(value)
        if(!this.root){
            this.root=newnode
        }
        else{   
            let current=this.root
            while(true){
                if(value<current.value){
                    if(current.left==null){
                        current.left=newnode
                        break
                    }
                    else{
                        current=current.left
                    }
                }
                else{
                    if(current.right==null){
                        current.right=newnode
                        break
                    }
                    else{
                        current=current.right
                    }
                }
            }
        }
    }
 
    findClosestValueInTree(root, target) {
        let closestValue = root.value;
        let currentNode = root;
      
        while (currentNode !== null) {
          if (Math.abs(target - currentNode.value) < Math.abs(target - closestValue)) {
            closestValue = currentNode.value;
          }
      
          if (target < currentNode.value) {
            currentNode = currentNode.left;
          } else if (target > currentNode.value) {
            currentNode = currentNode.right;
          } else {
            break;
          }
        }
      
        return closestValue;
      } 

}
const a=new bst()
a.insert(10)
a.insert(30)
a.insert(45)
a.insert(2)

console.log(a.findClosestValueInTree(a.root,21));
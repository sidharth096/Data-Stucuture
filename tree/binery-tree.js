class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarytree { 
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
 
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
  delete(value){
    this.root=this.deleteNode(this.root,value)
}

deleteNode(root,value){
    if (root==null) {
        return root
    }
    else if (value<root.value) {
        root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null 
        }
        else if (!root.left) {
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
}
min(root){
  if (!root.left) {
      return root.value
  }else{
      return this.min(root.left)
  }
}
max(root){
  if (!root.right) {
      return root.value
  } else {
      return this.max(root.right)
  }
}
preOrder(root){
  if (root) {
      console.log(root.value);
      this.preOrder(root.left)
      this.preOrder(root.right)
  }

}
inorder(root){
  if (root) {
      this.inorder(root.left)
      console.log(root.value);
      this.inorder(root.right)
  }
}
postOrder(root){
  if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value);
  }
}
levelOrder(){
  const queue=[]
  queue.push(this.root)
  while (queue.length) {
      let curr=queue.shift()
      console.log(curr.value);
      if(curr.left){
          queue.push(curr.left)
      }
      if(curr.right){
          queue.push(curr.right)
      }
  }
}  

}


const a=new binarytree()
a.insert(30)
a.insert(10)
a.insert(45)
a.insert(11) 
a.insert(20)
a.insert(50)
a.insert(51)
a.insert(8)
a.insert(42)
// a.delete(20)
// console.log(a.contains(5));
console.log(a);
// a.preOrder(a.root)
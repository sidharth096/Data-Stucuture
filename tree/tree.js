class tree{
    constructor(value){
        this.value=value;
        this.children=[]
    }
    addchild(child){
        this.children.push(child)
    }
}
const root=new tree(1)
const child1=new tree(5)
const child2=new tree(6)
const child2child1=new tree(10)
const child2child2=new tree(30)

root.addchild(child1)
root.addchild(child2)
child2.addchild(child2child1)
child2.addchild(child2child2)
console.log(root);





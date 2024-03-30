class node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class linked {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
    //adding-last
    append(value) {
      const newnode = new node(value);
      this.tail.next = newnode;
      this.tail = newnode;
      this.length++;
    }
    // traverse() {
    //   let count = 0;
    //   let currentnode = this.head;
    //   while (currentnode !== null) {
    //     currentnode = currentnode.next;
    //     count++;
    //   }
    //   return count;
    // }
    traverse1(count) {
      let currentnode = this.head;
      let decimalvalue=0
      while (currentnode !== null) {
           decimalvalue=decimalvalue+currentnode.value*Math.pow(2,count);
           currentnode = currentnode.next;
        count--
      //   console.log(currentnode.value*Math.pow(2,count))
      }
      return decimalvalue
    }
    decimal(){
      // let count=this.traverse()
      // console.log("count:",count);
      let g =this.traverse1(this.length-1)
      console.log("decimal:",g);
  
    }
  }
  const k = new linked(1);
  k.append(0);
  k.append(1);
  k.decimal()
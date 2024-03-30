function quickSort(array) {
   
    if (array.length <= 1) {
      return array;
    } else {
      const pivot = array[0];  
      const left = [];
      const right = [];
  
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          left.push(array[i]);
        } else {  
          right.push(array[i]);
        } 
    }
      
    console.log("left=",left);
    console.log("right=",right);
  
      return quickSort(left).concat(pivot, quickSort(right));
    }
  }


  const unsortedArray = [6,7,4,0,8,2,10,12];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray); 
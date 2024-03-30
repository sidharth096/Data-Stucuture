function mergeSort(arr) {
    // If the array has only one element, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
    else{
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively call mergeSort on each half
    // [5, 3, 8,-4, 4, 2, ];
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    console.log("left",leftSorted);
    console.log("right",rightSorted);
    console.log("jj");
    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
    }
  }
  
  function merge(left, right) {
    console.log("kk");
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements from left or right
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
 }
  

  const arr = [5, 3, 8,-4, 4, 2, ];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr)



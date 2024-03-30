let array = [10,20,30,40,50]
let target = 30;


function linearSearch(array,target){
    let count = 0;

    for (i = 0;i < array.length; i++){
        if (array[i] == target){
            count++;
        }
    }
    if (count == 0){
        console.log('target not found');
    }else{
        console.log('target found');
    }
}

linearSearch(array,target)
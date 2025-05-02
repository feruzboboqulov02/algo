let array = [1,2,3,4,6,7,9,10,11,12,13,14,15];

function missingNumber(array) {
    for(let i=0;i<array.length-1;i++){
        if(array[i]+1 !== array[i+1]){
            console.log(`Missing number is ${array[i]+1}`);
        }
    }
}


missingNumber(array);
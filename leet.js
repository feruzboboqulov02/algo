let array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let target= 7

function binarySearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j=i+1;j<array.length; j++){
            if (array[i] + array[j] === target){
                (console.log(`Pair found: ${array[i]} + ${array[j]} = ${target}`)
                );
                
            }
    
        }
    }
}


binarySearch(array, target);


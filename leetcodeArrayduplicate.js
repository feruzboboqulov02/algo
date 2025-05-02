let array = [1,2,3,4,5,6,7,8,3,4,5,6,7,8,9,10,11,12,13,14,15];

let newArray = [];

function checkDuplicate(array){
    for (let i=0;i<array.length; i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i]);
        }
    }return newArray
}


console.log(checkDuplicate(array));



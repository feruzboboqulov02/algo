//return largest and smallest numbers from an array

let array = [1,2,3,4,5,6,7,8,9,,11,12,13,14,1,22,3,0,5,-3];



function largestAndSmallest(array) {
    if (!Array.isArray(array) || array.length ===0){
        throw new Error("Input must be a non-empty array.");
    }
    let min= array[0]
    let max= array[0];

    for(let i=1;i<array.length;i++){
        const value = array[i];
        if (value < min) {
            min = value;
        } else if (value > max) {
            max = value;
        }
    }return {
        largest: max,
        smallest: min
    }

}
console.log(largestAndSmallest(array));



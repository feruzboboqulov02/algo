let arr1=[1,2,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15]
let arr2=[2,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



//WITH .INCLUDES() METHOD
// function intersection(arr1, arr2) {
//     const result = []
//     for (let i = 0; i < arr1.length; i++) {
//         if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
//             result.push(arr1[i])
//         }
//     }return result
// }

// console.log(intersection(arr1,arr2)) // [2]





//WITHOUT .INCLUDES() METHOD
function intersection(arr1, arr2) {
    let result = []
    for(let i =0;i<=arr1.length-1;i++){
        for(let j=0;j<=arr2.length;j++){
            if(arr1[i] === arr2[j] && !result.includes(arr1[i])){
                result.push(arr1[i])
            }
        }
    }return result
}


console.log(intersection(arr1,arr2)) // [2]
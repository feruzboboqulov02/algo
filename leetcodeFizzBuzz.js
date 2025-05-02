// /**
//  * @param {number} n
//  * @return {string[]}
//  */


// let array =[]
// var fizzBuzz = function(n) {
//     for(let i=1; i<=n; i++){
//         if(i%3 === 0 && i%5 ===0){
//             array.push("FizzBuzz")
//         }else if(i % 3 === 0){
//             array.push("Fizz")
//         }else if(i%5 === 0){
//             array.push("Buzz")
//         }else{
//             array.push(i.toString())
//         }
//     }return array
// };


//  // ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
// console.log(fizzBuzz(5)) // ["1", "2", "Fizz"]



/**
 * @param {number} n
 * @return {string[]}
 */


var fizzBuzz = function(n) {
    let array =[]
    for(let i=1; i<=n; i++){
        if(i%3 === 0 && i%5 ===0){
            array.push("FizzBuzz")
        }else if(i%3 === 0){
            array.push("Fizz")
        }else if(i%5 === 0){
            array.push("Buzz")
        }else{
            array.push(i.toString())
        }
    }return array
};


console.log(fizzBuzz(5)) // ["1", "2", "Fizz"];

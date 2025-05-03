const { factorial } = require("mathjs")

function isFraction(x){
    let sum = x*factorial(x-1)
    return sum
}

console.log(isFraction(5)) // 120
console.log(isFraction(6)) // 720
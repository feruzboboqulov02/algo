function summ(n){
    const split = n.toString().split('')
    let sum=0
    for(let i=0; i<split.length; i++){
        sum += parseInt(split[i])
    }return sum
    
}

console.log(summ(1234)) // 10;
console.log(summ(123456789)) // 45;
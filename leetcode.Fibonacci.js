function FibonacciNumber(n){
    if(n<0) throw new Error("Negative numbers are not allowed")
    if(n===0) return 0
    if(n===1) return 1
    

    let a =0, b=1
    for (let i=2;i<=n;i++){
        let next = a + b
        a = b
        b = next;
        if(b%2 === 0){
            console.log(`Fibonacci number is ${b}`)
        }


}return `The Fibonacci number is ${b} at position ${n}`
}


console.log(FibonacciNumber(3)) // 55



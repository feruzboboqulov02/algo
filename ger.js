let str = "hello"


let ishello = function(str){
    reversed=" "
    for(char in str){
        reversed = char + reversed
    }
    return reversed
}


console.log(ishello(str)) // "olleh"
console.log(ishello("world")) // "dlrow"
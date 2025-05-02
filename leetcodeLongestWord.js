let string = "hello, Assalamu alaikum, Tashkent, United States of America"

let splitted = string.split(" ");
let longest =0
let word = " "
function longestWord(str){
    for(i=0; i<splitted.length; i++){
        if(str[i].length> longest){
            longest = str[i].length
            word = str[i]
        }
}return longest, word
}


console.log(longestWord(splitted));

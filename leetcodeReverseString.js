let string = "hello, Assalamu alaikum, Tashkent, United States of America"

function reverseString(str){
    const split = str.split(" ")
    const reversed = split.reverse()
    return reversed.join(" ")
    
}



console.log(reverseString(string));
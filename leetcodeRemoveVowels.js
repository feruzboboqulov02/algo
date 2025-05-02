let array = ["u","i","a","o","e",]
let str = "the quick brown fox jumps over the latest"

function removeVowels(str) {
    let splitArray = str.split("")
    for(let i=0; i<splitArray.length; i++){
        if(splitArray[i] === "a" || splitArray[i] === "e" || splitArray[i] === "i" || splitArray[i] === "o" || splitArray[i] === "u"){
            splitArray.splice(i,1)
            i--
        }
    }return splitArray.join("")
}


console.log(removeVowels(str));

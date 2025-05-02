let str1 ="listen"
let str2 = "listen"


function isAnagram(str1,str2){
    const normalize = str => str.toLowerCase().split("").sort().join("");
    return normalize(str1) === normalize(str2);
}



console.log(isAnagram(str1,str2)); // true
console.log(isAnagram("hello","world")); // false


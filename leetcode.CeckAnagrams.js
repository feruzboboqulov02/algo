let str1 ="listen"
let str2 = "listen"


// function isAnagram(str1,str2){
//     const normalize = str => str.toLowerCase().split("").sort().join("");
//     return normalize(str1) === normalize(str2);
// }

function isAnagram(str1, str2) {
 if(str1.toLowerCase().split("").sort().join("")=== str2.toLowerCase().split("").sort().join("")){
        return true
 }else{
        return false
    }
 }
 


console.log(isAnagram(str1,str2)); // true
console.log(isAnagram("hello","world")); // false


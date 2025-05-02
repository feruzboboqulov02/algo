/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let reversedString = string.split('').reverse().join('');
    if(string === reversedString){
        console.log(`The number ${x} is a palindrome`);
        return true;
    }
    else{
        console.log(`The number ${x} is not a palindrome`);
        return false;
    }

    
};


console.log(isPalindrome(121)) // true;
; // true

console.log(isPalindrome(-121)) // false; // false
console.log(isPalindrome(10)) // false; // false
console.log(isPalindrome(12321)) // true; // true
console.log(isPalindrome(123321)) // true; // true

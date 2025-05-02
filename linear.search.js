"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 0;
function linearSearch(array, item) {
    for (var i = 1; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}
;
console.log(linearSearch(arrray, 5));
console.log("count= " + count);

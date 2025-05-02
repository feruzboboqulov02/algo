"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
var count = 0;
function binarySearch(array, item) {
    var start = 0;
    var end = array.length;
    var middle;
    var found = false;
    var position = -1;
    while (!found && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        else if (array[middle] < item) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return position;
}
console.log(binarySearch(numbers, 8));
console.log("count= " + count);

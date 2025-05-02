"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array = [5, 3, 8, 4, 2, 7, 1, 6, 0, 9, 10, 11, 12, 13, 14, 15, 16, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
var count = 0;
function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            count += 1;
        }
        var tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
}
console.log(selectionSort(array));
console.log("count= " + count);

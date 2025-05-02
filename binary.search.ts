export{}

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let count: number =0;


function binarySearch(array:number[], item:number):number{
    let start:number = 0
    let end:number =array.length
    let middle:number
    let found:boolean = false
    let position:number = -1

    while(!found && start <=end){
        count+=1
        middle = Math.floor((start + end) / 2)
        if(array[middle] ===item){
            found = true
            position = middle
            return position;
        }else if (array[middle]<item){
            start=middle + 1
        }else{end = middle - 1}
    }return position
}


console.log(binarySearch(numbers, 5));
console.log("count= "+ count);

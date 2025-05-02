let array = [
    {name: "john",age: 30},
    {name: "jane",age: 20},
    {name: "joe",age: 10},
]

function sortArray(array,age){
    return array.sort((a,b) => a.age-b.age)
}

console.log(sortArray(array));

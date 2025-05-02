let srting = "hello, Assalamu alaikum, Tashkent, United States of America";

let splitted = srting.toLocaleLowerCase().split("")

function checkOccurence(str,char){
    count =0
    for(i=0; i<str.length; i++){
        if(str[i] === char){
            count+=1
        }
    }return count
}


console.log(checkOccurence(splitted,"a"));


// console.log(splitted);


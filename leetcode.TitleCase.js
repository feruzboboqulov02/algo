let str = "hello, Assalamu alaikum, Tashkent, United States of America";


function customTitle(str){
    const words = str.toLowerCase().split(" ");
    
    if(words.lenght ===1){
        return words[0].charAt(0).toUpperCase()+ words[0].slice(1);
    }

    return words.
    map((word, index)=>{
        if(index===0 || index === words.length-1){
            return word.charAt(0).toUpperCase()+ word.slice(1);
        }return word.charAt(0).toUpperCase()+ word.slice(1);
    }).join(' ')
    
}



console.log(customTitle(str));

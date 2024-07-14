function rightPlace(string,char,name){
    let result = ``
    for(let i = 0; i < string.length ; i++){
        if(string[i] == `_`){
            result += char
        } else {
            result += string[i]
        }
    }
    if (result == name){
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }
}

rightPlace('Str_ng', 'i','String')
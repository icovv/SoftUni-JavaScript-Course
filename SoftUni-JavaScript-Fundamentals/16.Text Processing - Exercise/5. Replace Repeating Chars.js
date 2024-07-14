function replace(string){
    let prevLetter = ``
    let foundLetters = [];

    for (let char of string){
        if (prevLetter == char){
            continue;
        } else {
            foundLetters.push(char);
            prevLetter = char
        }
    }
    console.log(foundLetters.join(``))
    
}
replace('aaaaabbbbbcdddeeeedssaa')
replace('qqqwerqwecccwd')
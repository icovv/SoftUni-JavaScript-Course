function pascalSplit(string){
    let word = ``;
    let output = []
    for(let char of string){
        if (char.charCodeAt(char) >= 65 && char.charCodeAt(char) <= 90){
            if (word.length > 0){output.push(word)}
            word = ``;
            word += char
        }
        if (!(char.charCodeAt(char) >= 65 && char.charCodeAt(char) <= 90)){
            word += char
        }
    }
    output.push(word)
    console.log(output.join(`, `))
}
pascalSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalSplit('HoldTheDoor')
pascalSplit('ThisIsSoAnnoyingToDo')
function substring(word,sentance){
    let fixedSentance = sentance.toLowerCase().split(` `);
    let isFound = false;
    for (let words of fixedSentance){
        if (words == word){
            console.log(words);
            isFound = true;
            break;
        }
    }
    if (isFound == false){
        console.log(`${word} not found!`)
    }
}
substring('python',

'JavaScript is the best programming language')
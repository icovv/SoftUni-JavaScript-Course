function censoredWord(sentance,word){
    let text = sentance
    while(text.includes(word)){
        text = text.replace(word,`*`.repeat(word.length))
    }
    console.log(text)
}
censoredWord('A small sentence with some words',

'small')
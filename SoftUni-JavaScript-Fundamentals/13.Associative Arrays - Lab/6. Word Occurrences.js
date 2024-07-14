function counter(sentances){
    let wordCounter = {};
    for (let word of sentances){
        if (wordCounter[word]){
            wordCounter[word] += 1
        } else {
            wordCounter[word] = 1
        }
    }
    let wordCounterArr = Object.entries(wordCounter);
    wordCounterArr.sort((a,b) => b[1] - a[1]).map(x => console.log(`${x[0]} -> ${x[1]} times`))
}
counter(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])
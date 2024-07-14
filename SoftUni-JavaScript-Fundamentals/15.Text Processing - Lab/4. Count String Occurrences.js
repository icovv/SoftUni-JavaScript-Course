function occurances(sentance,search){
    let words = sentance.split(` `)
    let counter = 0
    for (let word of words){
        if (word == search){
        counter += 1
        }
    }
    console.log(counter)
}
occurances('This is a word and it also is a sentence',

'is')
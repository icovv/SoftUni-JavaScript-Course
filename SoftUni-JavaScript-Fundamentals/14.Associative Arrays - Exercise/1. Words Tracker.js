function wordTracker(arr){
    let wordsRequired = arr.shift().split(` `)
    let wordsObj = {};
    for (let word of wordsRequired){
        wordsObj[word] = 0;
    }
    for (let i = 0; i< arr.length; i++){
        if (arr[i] in wordsObj){
            wordsObj[arr[i]] += 1
        } else {
            continue
        }
    }
   let wordsArr = Object.entries(wordsObj)
   wordsArr.sort((a,b) => b[1] - a[1]).map(x => console.log(`${x[0]} - ${x[1]}`))
}
wordTracker(['this sentence','In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
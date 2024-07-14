function sorting(arr){
    let sorted = arr.sort((a,b) => a-b)
    let arrSorted = []
    while(sorted.length > 0){
        let maxNum = sorted.pop();
        let minNum = sorted.shift();

        arrSorted.push(maxNum,minNum)
    }
    console.log(arrSorted.join(` `))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

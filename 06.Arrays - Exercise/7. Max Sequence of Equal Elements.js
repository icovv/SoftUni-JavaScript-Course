function maxSequence(arr){
    let sequenceCounter1 = 0;
    let sequenceCounter2 = 0;
    let indexCount = [];
    let maxCount = [];
    for (let i = 0; i < arr.length; i++){

    for (let j = i; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            break;
        } else {
            sequenceCounter1 += 1;
            indexCount.push(arr[j]);
        }
    }
    if(sequenceCounter1 > sequenceCounter2){
    sequenceCounter2 = sequenceCounter1;
    sequenceCounter1 = 0;
    maxCount = indexCount;
    indexCount = []
    } else if (sequenceCounter2 === sequenceCounter1){
        indexCount = [];
        sequenceCounter1 = 0;
    } else   {
    sequenceCounter1 = 0;
    indexCount = []
    }
}
console.log(maxCount.join(` `))
}

// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
function searching(arr,conditions){
    let numsToSteal = Number(conditions[0]);
    let removeNums = Number(conditions[1]);
    let searchNum = Number(conditions[2]);

    let changedArr = arr.splice(0,numsToSteal);
    let removed = changedArr.splice(0,removeNums);
    

    let occuranceCounter = 0; 
    for (let i = 0; i< changedArr.length; i ++){
        if (changedArr[i] == searchNum){
            occuranceCounter += 1
        }
    }
    console.log(`Number ${searchNum} occurs ${occuranceCounter} times.`)
}

searching([5, 2, 3, 4, 1, 6],[5, 2, 3])
searching([7, 1, 5, 8, 2, 7],[3, 1, 5])
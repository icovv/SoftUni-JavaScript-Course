function angryCat (arr,starNum,command){
    arr = arr.map(Number)
    let left = [];
    let right = [];
    let entryPoint = Number(arr[starNum]);

    for (let j = starNum - 1; j >= 0; j --){
        if (command == `cheap`){
            if (arr[j] < entryPoint){
            left.push(arr[j])
            }
        } else {
            if (arr[j] >= entryPoint){
            left.push(arr[j])
            }
        }
    }

    for (let i = starNum + 1; i < arr.length; i ++){
        if (command == `cheap`){
            if (arr[i] < entryPoint){
            right.push(arr[i])
            }
        } else {
            if (arr[i] >= entryPoint){
            right.push(arr[i])
            }
        }
    }

    let totalLeft = 0;

    for (let k = 0; k < left.length; k++){
        totalLeft += left[k]
    }

    let totalRight = 0;
    for (let n = 0; n < right.length; n++){
        totalRight += right[n]
    }
    if (totalRight > totalLeft) {
        console.log(`Right - ${totalRight}`)
    } else if (totalRight <= totalLeft){
        console.log(`Left - ${totalLeft}`)
    }
}
angryCat ([1, 5, 1], 1, "cheap")
angryCat ([5, 10, 12, 5, 4, 20], 3 ,"cheap")
angryCat ([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7 ,"expensive")
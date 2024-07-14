function bomber(arr, power){
    let [bombNum,bombPower] = power;

    while (arr.includes(bombNum)){
        let idx = arr.indexOf(bombNum);
        arr.splice(Math.max(0, idx - bombPower), bombPower * 2 + 1, 0)
    }

    let sum = 0;

    for (let num of arr){
        sum += num
    }

    console.log(sum)

}

// bomber([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
bomber([1, 4, 4, 2, 8, 9, 1], [9, 3])
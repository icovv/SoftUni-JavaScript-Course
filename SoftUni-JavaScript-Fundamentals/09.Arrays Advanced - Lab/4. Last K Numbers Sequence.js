function kNums(n,k){
    let result = [1];

    for (let i = 1; i < n; i++){
        let sum = 0;
        for (let j = Math.max(0, i - k); j < i; j++){
            sum += result[j]
        }
        result.push(sum)
    }

    console.log(result.join(` `))
}

kNums(6, 3)
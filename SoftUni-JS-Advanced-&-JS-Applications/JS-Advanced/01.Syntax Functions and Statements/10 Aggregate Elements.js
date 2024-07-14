function solve(n){
    let total = 0;
    let inverse = 0;
    for (i = 0; i < n.length; i ++){
        total += n[i]
    }
    for (let j = 0; j < n.length; j ++){
        if (n[j] == 0){
            continue
        }
        inverse += 1 / n[j]
    }
    console.log(total)
    console.log(inverse)
    console.log(n.join(``).toString())
}
solve([2,2])
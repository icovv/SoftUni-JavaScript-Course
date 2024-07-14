function solve(arr){
    let output = [];
    for (let item of arr){
        if (item >= 0){
            output.push(item)
        } else if (item < 0){
            output.unshift(item)
        }
    }
    console.log(output)
}
solve([3, -2, 0, -1])
function solve(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            result.push(arr[i])
        }
    }
    // console.log(result)
    result.reverse();
    let output = []
    for (let item of result){
        item = item * 2
        output.push(item)
    }
       return output.join(` `)
}
solve([3, 0, 10, 4, 7, 3])
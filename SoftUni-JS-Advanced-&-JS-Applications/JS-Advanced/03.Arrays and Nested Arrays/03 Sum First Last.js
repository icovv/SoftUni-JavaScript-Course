function solve(arr){
    let result = arr.map(x => Number(x))
    console.log(result[0] + result[result.length - 1])
}
solve(['20', '30', '40'])
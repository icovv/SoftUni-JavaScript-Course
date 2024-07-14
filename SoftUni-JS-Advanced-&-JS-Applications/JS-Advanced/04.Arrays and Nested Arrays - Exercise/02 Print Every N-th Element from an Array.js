function solve(arr,step){
    let output = [];

    for (let i = 0; i < arr.length; i += step){
        output.push(arr[i])
    }

    return output

}
solve(['1', '2', '3', '4', '5'], 6)
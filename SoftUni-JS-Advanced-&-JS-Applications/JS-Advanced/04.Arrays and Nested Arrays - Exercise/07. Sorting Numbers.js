function solve(arr){
    arr.sort((a,b) => Number(b)-Number(a));
    let arrLength = arr.length
    let output = [];

    for (let i = 0; i < arrLength; i ++){
        if (i % 2 == 0){
            output.push(arr[arr.length - 1]);
            arr.pop();
        } else {
            output.push(arr[0]);
            arr.shift();
        }
    }
    console.log(output)
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
function solve(arr){
let output = [];
let last = ``
for (let i = 0; i < arr.length; i ++){
    if (i == 0){
        last = arr[i];
        output.push(arr[i]);
        continue;
    }
    if (arr[i] >= last){
        output.push(arr[i])
        last = arr[i];
    } else {
        if (output[output.length-1] >= last){
            continue;
        } else {
        last = arr[i]
        }
    }
}
    // output.map(x => console.log(x))
    return output
}
// solve([1,3,8, 4, 10, 12, 3, 2, 24])
// solve([1,2,3,4])
solve([20,3,2,15,6,1])
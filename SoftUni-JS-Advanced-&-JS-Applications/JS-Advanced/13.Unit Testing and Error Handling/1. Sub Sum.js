function solve(arr,start,end){
    if (!Array.isArray(arr)){
         return NaN
    }
    if (start < 0){
        start = 0
    }
    if (end >= arr.length){
        end = arr.length - 1 
    }
    let result = 0;

    for (let item of arr){
        if (typeof(item) != `number`){
            return NaN
        }
    }
    for (let i = start; i <= end; i++){
        result += arr[i]
    }

    return result
    
}

// console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([1], -3, 1))
// console.log(solve([10, 'twenty', 30, 40], 0, 2))
// console.log(solve([], 1, 2))
// console.log(solve('text', 0, 2))
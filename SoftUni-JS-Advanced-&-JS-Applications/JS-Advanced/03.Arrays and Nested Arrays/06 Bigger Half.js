function solve(arr){
    let newArr = arr.sort((a,b) => a-b);
    console.log(newArr.slice(Math.floor(newArr.length / 2)))
}
solve([3, 19, 14, 7, 2, 19, 6])
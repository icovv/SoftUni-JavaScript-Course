function solve(arr){
    let leftToRight = 0;
    let rigthToLeft = 0;
    for (let row = 0; row < arr.length; row ++){
       leftToRight += arr[row][row]
       rigthToLeft += arr[row][(arr.length - 1) - row]
    }
    console.log(`${leftToRight} ${rigthToLeft}`)
    
}
solve([[3, 5, 17], 
    [-1, 7, 14], 
    [1, -8, 89]])
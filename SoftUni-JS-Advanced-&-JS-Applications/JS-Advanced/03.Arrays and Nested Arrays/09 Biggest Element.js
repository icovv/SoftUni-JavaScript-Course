function solve(arr){
    let numberBig = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i ++){
        for (let j = 0; j < arr[i].length; j ++){
            if (arr[i][j] >= numberBig){
                numberBig = arr[i][j]
            }        
        }
    }
   return numberBig
}
solve([[-35, -5, -7, -12], [-1, -4, -33, -34], [-8, -3, -10, -36]])
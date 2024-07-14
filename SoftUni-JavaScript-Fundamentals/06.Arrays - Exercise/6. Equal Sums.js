function equalSums(arr){
    let numLeft = 0;
    let numRight = 0;
    let areEqual = false;
    for(let i = 0; i < arr.length; i++){
        
        for (let j = i - 1; j >= 0; j-- ){
            numLeft += arr[j]
        }
        for (let g = i + 1; g < arr.length; g++){
            numRight += arr[g]
        }
        
    if (numLeft == numRight){
        console.log(i)
        areEqual = true
    } else {
        numLeft = 0;
        numRight = 0;
    }    
    }
    
    if (areEqual !== true){
    console.log(`no`)
    }
}
equalSums([1, 2, 3, 3])
// equalSums([1, 2])
// equalSums([1])
// equalSums([1, 2, 3])
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])

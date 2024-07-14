function solve(arr){
    let pairsCount = 0

    //preglejdam po koloni (nadolu) dali imam pairs
        for (let col = 0; col < arr[0].length; col ++){
            let lastnum = ``
        for (let row = 0; row < arr.length; row ++){
            let currNum = arr[row][col];
            if (currNum === lastnum){
                pairsCount += 1
            }
            lastnum = currNum
        }
    }
    
    // preglejdam po redove dali ima pairs
    for (let rows = 0; rows < arr.length; rows ++){
        let lastNumRows = ``
        for (let cols = 0; cols < arr[rows].length; cols ++){
            if (arr[rows][cols] === lastNumRows){
                pairsCount += 1
            }
            lastNumRows = arr[rows][cols]
        }
    }
    console.log(pairsCount)

}
// solve([['2', '3', '4', '7', '0'],

// ['4', '0', '5', '3', '4'],

// ['2', '3', '5', '4', '2'],

// ['9', '8', '7', '5', '4']])
solve([['test', 'yes', 'yo', 'ho'], 
        ['well', 'done', 'yo', '6'], 
        ['not', 'done', 'yet', '5']])
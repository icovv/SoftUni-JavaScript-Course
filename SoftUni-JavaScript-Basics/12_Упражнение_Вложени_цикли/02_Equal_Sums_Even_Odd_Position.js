function evenOrOdd (input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let print = ``;


    for (let row = firstNumber; row <= secondNumber; row += 1) {
        let rowAsString = `${row}`
        let evenSum = 0;
        let oddSum = 0;
        for (let col = 0; col < rowAsString.length; col += 1) {
            let currentNum = Number(rowAsString[col])
            if (col % 2 === 0) {
                evenSum += currentNum
            } else {
                oddSum += currentNum
            }
        }
        if (evenSum === oddSum) {
            print += `${row} `
        }
    }
    console.log(print)
}

evenOrOdd (["100000",
"100050"])

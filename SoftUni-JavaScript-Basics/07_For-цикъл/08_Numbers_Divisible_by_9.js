function numbersDivisibleBy9 (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let totalNums = 0;
    let validNums = '';

    for (let i = num1; i <= num2 ; i += 1){
        if (i % 9 === 0){
            totalNums += i
            validNums += i + '\n';
        }
        
    }

    console.log(`The sum: ${totalNums}`)
    console.log(validNums)
}

numbersDivisibleBy9 (["100", "200"])
function sumOfTwo (input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;
    let breakPoint = false;

    for (let num1 = startNum; num1 <= endNum; num1 += 1){
        for(let num2 = startNum; num2 <= endNum; num2 += 1){
            combinations += 1
            if (num1 + num2 === magicNum) {
                console.log(`Combination N:${combinations} (${num1} + ${num2} = ${magicNum})`)
                breakPoint = true
                break;
            }
        }
        if (breakPoint === true) {
            break;
        }
    }

     if (breakPoint !== true) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwo (["23",
"24",
"20"])


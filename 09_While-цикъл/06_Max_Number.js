function maxNum (input) {
    let command = input[0];

    let i = 1;
    let maxNum = Number.MIN_SAFE_INTEGER

    while (command !== `Stop`) {
        let num = Number(command);

        if (num > maxNum) {
            maxNum = num
        }

        command = input[i];
        i += 1;
        
    }
    console.log(maxNum)
}

maxNum (["999",
"Stop"])




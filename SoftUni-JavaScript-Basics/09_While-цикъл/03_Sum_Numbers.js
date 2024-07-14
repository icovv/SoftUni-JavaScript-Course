function numbers (input) {
    let limitNum = Number(input[0]);
    let startNum = Number(input[1])
    let total = 0
    
    let i = 1
    while (limitNum >= total) {
        startNum = Number(input[i]);
        i += 1;
        total += startNum   
        if(total >= limitNum) {
            console.log(total)
            break;
        }
    }

}

numbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])




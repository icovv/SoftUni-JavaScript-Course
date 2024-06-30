function sequence (input) {
    let maxNum = Number(input[0]);
    let startNum = 1;

    let i = 1
    while (maxNum >=startNum) {
       
        console.log(startNum)
        startNum = (startNum * 2) + 1;
    }
}
sequence(["3"])
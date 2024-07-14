function specialNum (input) {
    let num = Number(input[0]);
    let output = ``;

    for(let row = 1111; row <= 9999; row += 1){
        let rowAsString = `${row} `
        for(let col = 0; col < rowAsString.length- 1; col+= 1){
            let rowAsNum = Number(rowAsString[col]);
            if (num % rowAsNum !== 0) {
                rowAsString = ``;
                break;
            }
        }
        output += rowAsString
    
    }
    console.log(output)

}
specialNum (["3"])
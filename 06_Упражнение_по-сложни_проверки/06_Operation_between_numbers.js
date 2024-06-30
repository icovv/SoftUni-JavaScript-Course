function operations (input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`)
    } else {
    switch (operator) {
        case "+":
            let evenOrOddPlus;
            let totalPlus = n1 + n2;
            if (totalPlus % 2 === 0){
                evenOrOddPlus = `even`
            } else {
                evenOrOddPlus = `odd`
            }
            console.log(`${n1} ${operator} ${n2} = ${totalPlus} - ${evenOrOddPlus}`)
            break;
        case "-":
            let evenOrOddMinus;
            let totalMinus = n1 - n2;
            if (totalMinus % 2 === 0){
                evenOrOddMinus = `even`
            } else {
                evenOrOddMinus = `odd`
            }
            console.log(`${n1} ${operator} ${n2} = ${totalMinus} - ${evenOrOddMinus}`)
            break;
        case "*":
            let evenOrOddMultiplY;
            let totalMultiply = n1 * n2;
            if (totalMultiply % 2 === 0){
                evenOrOddMultiplY = `even`
            } else {
                evenOrOddMultiplY = `odd`
            }
            console.log(`${n1} ${operator} ${n2} = ${totalMultiply} - ${evenOrOddMultiplY}`)
            break;
        case "/":
            console.log (`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`)
            break;
        case "%":
            console.log (`${n1} % ${n2} = ${n1 % n2}`)
            break; 
        
    }
}
}

//operations (["112", "10", "+"])


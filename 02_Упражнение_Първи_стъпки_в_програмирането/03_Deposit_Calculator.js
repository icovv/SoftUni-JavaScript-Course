function calculator(input) {
    let depAmount = Number(input[0]);
    let depTerm = Number(input[1]);
    let yearlyRate = Number(input[2]) / 100;

    let currRate = depAmount * yearlyRate
    let rate = currRate / 12
    let total = depAmount + (depTerm * rate)

    console.log(total)


}

calculator(["2350" , "6" , "7"])
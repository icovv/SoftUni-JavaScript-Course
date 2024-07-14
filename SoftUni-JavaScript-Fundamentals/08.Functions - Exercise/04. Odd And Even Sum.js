function oddAndEvenSum (num){
    let numAsString = num.toString();
    let Odd = 0;
    let Even = 0;
    for (let i = 0; i < numAsString.length; i++){
        let numAsNum = Number(numAsString[i])
        if (numAsNum % 2 == 0){
            Even += numAsNum
        } else {
            Odd += numAsNum
        }
    }

    console.log(`Odd sum = ${Odd}, Even sum = ${Even}`)
}

oddAndEvenSum(1000435)
// oddAndEvenSum(3495892137259234)
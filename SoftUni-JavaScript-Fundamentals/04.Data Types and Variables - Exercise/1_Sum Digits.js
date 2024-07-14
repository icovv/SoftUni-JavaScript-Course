function sumOfDigits (num){
    let numAsString = num.toString()
    let num1 = 0;

    for(let i = 0; i < numAsString.length; i++){
        num1 += Number(numAsString[i])
    }
    console.log(num1)
}

sumOfDigits(245678)
// sumOfDigits(543)
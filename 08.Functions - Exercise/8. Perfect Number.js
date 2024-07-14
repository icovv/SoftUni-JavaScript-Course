function perfectNum(num){
    let perfectNumDivisor = 0;

    for (let divisor = 1; divisor < num; divisor ++){
        if (num % divisor == 0){
            perfectNumDivisor += divisor
        }
    }

    if (perfectNumDivisor == num){
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}

perfectNum(6)
perfectNum(28)
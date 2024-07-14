function factorialDivison(num1,num2){

    let factorialNum1 = factorialDivisonNum1(num1)
    let factorialNum2 = factorialDivisonNum2(num2)

    console.log((factorialNum1/factorialNum2).toFixed(2))

    function factorialDivisonNum1(num1){
        let factorialNum1 = num1
        for (let i = num1 - 1; i > 0; i --){
            factorialNum1 *= i 
        }
        return factorialNum1
    }
    function factorialDivisonNum2(num2){
        let factorialNum2 = num2
        for (let i = num2 - 1; i > 0; i --){
            factorialNum2 *= i
        }
        return factorialNum2
    }
}

// factorialDivison(5,2)
factorialDivison(6,2)
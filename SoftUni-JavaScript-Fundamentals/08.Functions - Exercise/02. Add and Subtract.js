function addAndSubtract(num1,num2,num3){
    let result = add(num1,num2);
    let finalResult = subtract(result,num3)

    console.log(finalResult)
    
    function add(num1,num2){
        return num1 + num2
    }
    function subtract(num1,num2){
        return num1 - num2
    }
}


addAndSubtract(23,6,10)
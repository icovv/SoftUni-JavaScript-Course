    function task (num1,num2,num3){
    let negativeCount = 0;

    if (num1 < 0){
        negativeCount += 1
    }
    if (num2 < 0){
        negativeCount += 1
    }
    if (num3 < 0){
        negativeCount += 1
    }

    if (negativeCount % 2 == 0){
        console.log(`Positive`)
    } else {
        console.log(`Negative`)
    }
    }  

task(5,12,-15)
task(-5,-12,15)
task(-5,-12,-15)
task(5,12,15)




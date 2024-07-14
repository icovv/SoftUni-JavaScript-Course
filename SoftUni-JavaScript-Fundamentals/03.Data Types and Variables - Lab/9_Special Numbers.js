function specialNums(num){

    for (let i = 1; i <= num; i++){
            let sumOfDigits = 0;
            sumOfDigits = i % 10 + parseInt(i/10)

            if (sumOfDigits === 5 ||sumOfDigits === 11 || sumOfDigits  === 7 ){
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        }           
    }
//specialNums(15)
specialNums(20)
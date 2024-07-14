function sumOfDigits(num){
    let sum = 0;

    while(num != 0){
        let units = num % 10;
        num -= units;
        num /= 10;
        sum += units;
    }

    console.log(sum)
}

sumOfDigits(543) // 12
sumOfDigits(97561) // 28
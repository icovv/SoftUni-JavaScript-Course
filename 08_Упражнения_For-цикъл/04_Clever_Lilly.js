function cleverLilly (input){
    let age = Number(input[0]);
    let stockPrice = Number(input[1]);
    let singlePriceToy = Number(input[2]);

    let toysCount = 0;
    let moneyCount = 0;

    for (let i = 1; i <= age; i +=1){
        if (i % 2 === 0){
            moneyCount +=((i/2) * 10) - 1
        } else {
            toysCount += 1 * singlePriceToy
        }
    }
    if ((moneyCount + toysCount) >= stockPrice) {
        console.log (`Yes! ${((moneyCount + toysCount) - stockPrice).toFixed(2)}`)
    } else {
        console.log (`No! ${(stockPrice - (moneyCount + toysCount)).toFixed(2)}`)
    }
}


cleverLilly (["10","170.00","6"])

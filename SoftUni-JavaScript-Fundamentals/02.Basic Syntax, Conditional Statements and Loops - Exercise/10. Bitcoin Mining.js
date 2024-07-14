function mining(input){
    let i = 0;
    let minedAmount = Number(input[0]);
    let daysCounter = 0;
    let bitcounPrice = 11949.16;
    let goldPrice = 67.51;
    let bitcoinsBought = 0;
    let money = 0;
    let dayOfFirstBitcoin = 0;
    let possibleQuantity = 0;


    for (let index = 1; index <= input.length; index ++){
        daysCounter += 1
        minedAmount = Number(input[i]);
        if (daysCounter % 3 === 0){
            minedAmount *= 70/100
        }
        money += minedAmount * goldPrice

        while(money >= bitcounPrice){
            bitcoinsBought += 1;
            money -= bitcounPrice

            if (bitcoinsBought == 1){
                dayOfFirstBitcoin += daysCounter
            }
        }

        i += 1     
    }
        console.log(`Bought bitcoins: ${bitcoinsBought}`)
        if (bitcoinsBought >= 1){
            console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
        }
        console.log(`Left money: ${money.toFixed(2)} lv.`)
}
// mining ([100, 200, 300])
// mining ([50, 100])
mining([3124.15, 504.212, 2511.124])
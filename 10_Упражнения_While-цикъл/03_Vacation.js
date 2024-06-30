function vacation (input) {
    let reqAmount = Number(input[0]);  
    let availableAmount = Number(input[1]);

    let spedOrSave = input[2];
    let amountSavedOrSpent = Number(input[3]);

    let daysPassed = 0;
    let daysSpend = 0;

    let index = 4;

    while (availableAmount < reqAmount) {
        if (spedOrSave === `spend`) {
            daysSpend += 1
            availableAmount -= Number(amountSavedOrSpent)
        }  else if (spedOrSave === `save`){
            availableAmount += Number(amountSavedOrSpent)
            daysSpend = 0
        }
        daysPassed += 1

        if (daysSpend >= 5){
            break;
        }

        if (availableAmount < 0) {
            availableAmount = 0
        }
        
        spedOrSave = input[index]
        amountSavedOrSpent = input[index + 1]
        index += 2
    }

    if (daysSpend >= 5) {
        console.log(`You can't save the money.`);
        console.log(daysPassed)
    } else if (availableAmount >= reqAmount){
        console.log(`You saved the money for ${daysPassed} days.`)
    }
}

vacation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])















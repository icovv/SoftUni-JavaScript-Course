function Shopping (input) {

    let budget = Number(input[0]);
    let numberVideoCards = Number(input[1]);
    let numberProcessors = Number(input[2]);
    let numberRam = Number(input[3]);

    let videoCardCost = numberVideoCards * 250
    let processorsCost = (videoCardCost * 0.35) * numberProcessors
    let ramCost = (videoCardCost * 0.1) * numberRam

    let totalCost = videoCardCost + processorsCost + ramCost

    if (numberVideoCards > numberProcessors) {
        totalCost -= totalCost * 0.15
    }

    if (budget >= totalCost) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    
    } else if (totalCost > budget) {

        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }
    }

Shopping (["920.45","3", "1", "1"])

function movie (input) {

    let movieBudget = Number(input[0]);
    let numberActors = Number(input[1]);
    let priceActorPerOne = Number(input[2]);

    let decor = movieBudget * 0.1 
    let totalPriceActor = numberActors * priceActorPerOne
    
    if (numberActors > 150) {
        totalPriceActor -= totalPriceActor * 0.1
    }

    if ((decor + totalPriceActor) > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${((decor + totalPriceActor) - movieBudget).toFixed(2)} leva more.`);
    }   else if ((decor + totalPriceActor) <= movieBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - (decor + totalPriceActor)).toFixed(2)} leva left.`);
    }
}

movie (["9587.88", "222", "55.68"])



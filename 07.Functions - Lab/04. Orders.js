function drinkCalculator(drink,count){
    switch(drink){
        case "coffee":
            console.log((1.50 * count).toFixed(2))
            break;
        case "water":
            console.log((1.0 * count).toFixed(2))
            break;
        case "coke":
            console.log((1.40 * count).toFixed(2))
            break;
        case "snacks":
            console.log((2.00 * count).toFixed(2))
            break;
    }
}

drinkCalculator("water", 5)
drinkCalculator("coffee", 2)
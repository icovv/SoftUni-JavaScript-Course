function fishingBoat (input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);
    let priceRent = 0.00;

    switch (season) {
        case "Spring":
        priceRent = 3000;
        if (fishermanCount <= 6) {
            priceRent -= priceRent * (10/100);
        } else if (fishermanCount > 6 && fishermanCount <= 11){
            priceRent -= priceRent * (15/100);
        } else if (fishermanCount >= 12 ) {
            priceRent -= priceRent * (25/100);
        }
        if (fishermanCount % 2 === 0){
            priceRent -= priceRent * (5/100)
        }
            break;
        case "Summer":
        priceRent = 4200;
        if (fishermanCount <= 6) {
            priceRent -= priceRent * (10/100);
        } else if (fishermanCount > 6 && fishermanCount <= 11){
            priceRent -= priceRent * (15/100);
        } else if (fishermanCount >= 12 ) {
            priceRent -= priceRent * (25/100);
        }
        if (fishermanCount % 2 === 0){
            priceRent -= priceRent * (5/100)
        }
            break;
        case "Autumn":
        priceRent = 4200;
        if (fishermanCount <= 6) {
            priceRent -= priceRent * (10/100);
        } else if (fishermanCount > 6 && fishermanCount <= 11){
            priceRent -= priceRent * (15/100);
        } else if (fishermanCount >= 12 ) {
            priceRent -= priceRent * (25/100);
        }
            break;
        case "Winter":
        priceRent = 2600;
        if (fishermanCount <= 6) {
            priceRent -= priceRent * (10/100);
        } else if (fishermanCount >= 7 && fishermanCount <= 11){
            priceRent -= priceRent * (15/100);
        } else if (fishermanCount >= 12 ) {
            priceRent -= priceRent * (25/100);
        }
        if (fishermanCount % 2 === 0){
            priceRent -= priceRent * (5/100)
        }
            break;
    }

    if (budget >= priceRent) {
        console.log(`Yes! You have ${(budget - priceRent).toFixed(2)} leva left.`)
    } else (
        console.log(`Not enough money! You need ${(priceRent - budget).toFixed(2)} leva.`)
    )
}
//fishingBoat (["3000", "Summer", "11"])

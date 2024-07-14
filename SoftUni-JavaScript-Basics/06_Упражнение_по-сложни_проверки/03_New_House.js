function newHouse(input) {

    let flowers = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0.00
    
    switch (flowers){
        case "Roses":
            price = numberFlowers * 5.00
            if (numberFlowers > 80){
                price -= price * (10/100)
            }
            break;
        case "Dahlias":
            price = numberFlowers * 3.80
            if (numberFlowers > 90){
                price -= price * (15/100)
            }
            break;
        case "Tulips":
            price = numberFlowers * 2.80
            if (numberFlowers > 80){
                price -= price * (15/100)
            }
            break;
        case "Narcissus":
            price = numberFlowers * 3.00
            if (numberFlowers < 120){
                price += price * (15/100)
            }
            break;
        case "Gladiolus":
            price = numberFlowers * 2.50
            if (numberFlowers < 80){
                price += price * (20/100)
            }
            break;
    }

        if (price <= budget ) {
            console.log(`Hey, you have a great garden with ${numberFlowers} ${flowers} and ${(budget - price).toFixed(2)} leva left.`)
        } else if (price > budget) {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
        }

}

newHouse (["Tulips","88","260"])

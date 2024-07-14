function smallShop(input) {
    let drink = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    switch(town){
        case "Sofia":
        if (drink === "coffee"){
            console.log(quantity * 0.50)
        } else if (drink === "water") {
            console.log(quantity * 0.80)
        } else if (drink === "beer") {
            console.log(quantity * 1.20)
        } else if (drink === "sweets") {
            console.log(quantity * 1.45)
        } else if (drink === "peanuts") {
            console.log(quantity * 1.60)
        }
        break;
        case "Plovdiv":
            if (drink === "coffee"){
                console.log(quantity * 0.4)
            } else if (drink === "water") {
                console.log(quantity * 0.70)
            } else if (drink === "beer") {
                console.log(quantity * 1.15)
            } else if (drink === "sweets") {
                console.log(quantity * 1.30)
            } else if (drink === "peanuts") {
                console.log(quantity * 1.50)
            }
        break;
        case "Varna":
            if (drink === "coffee"){
                console.log(quantity * 0.45)
            } else if (drink === "water") {
                console.log(quantity * 0.7)
            } else if (drink === "beer") {
                console.log(quantity * 1.10)
            } else if (drink === "sweets") {
                console.log(quantity * 1.35)
            } else if (drink === "peanuts") {
                console.log(quantity * 1.55)
            }
        break;
    }

}

smallShop (["beer", "Sofia", "6"])
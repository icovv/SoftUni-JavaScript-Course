function trip (input) {

    let tripDays = Number(input[0]);
    let typePlace = input[1];
    let feedback = input[2];
    let price = 0.00;
    let tripNights = tripDays - 1

    switch (typePlace) {
        case "room for one person":
            price = 18.00 * tripNights
            break;
        case "apartment":
            price = 25.00 * tripNights
            if (tripNights < 10 ){
                price -= price * (30/100)
            } else if (tripNights >= 10 && tripDays <= 15){
                price -= price * (35/100)
            } else if (tripNights > 15){
                price -= price * (50/100)
            }
            break;
        case "president apartment":
            price = 35.00 *tripNights
            if (tripNights < 10 ){
                price -= price * (10/100)
            } else if (tripNights >= 10 && tripNights <= 15){
                price -= price * (15/100)
            } else if (tripNights > 15){
                price -= price * (20/100)
            }
            break;
    }

        if (feedback === "positive") {
            price += price * (25/100)
        } else if (feedback === "negative"){
            price -= price * (10/100)
        }

        console.log((price).toFixed(2))
    }

trip (["14","apartment","positive"])

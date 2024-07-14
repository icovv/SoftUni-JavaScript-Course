function hotelRooms (input) {

    let month = input[0];
    let numberNights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = 50.00;
            priceApartment = 65.00;
            
            if (numberNights > 7 && numberNights < 14) {
                priceStudio -= priceStudio * (5/100)
            } else if (numberNights > 14) {
                priceStudio -= priceStudio * (30/100)
            }

            if (numberNights > 14 ){
                priceApartment -= priceApartment * (10/100)
            }
            break;
        case "June":
        case "September":
            priceStudio = 75.20;
            priceApartment = 68.70;
            if (numberNights > 14) {
                priceStudio -= priceStudio * (20/100);
            }
            if (numberNights > 14 ){
                priceApartment -= priceApartment * (10/100)
            }
            break;
        case "July":
        case "August":
            priceStudio = 76.00;
            priceApartment = 77.00;
            if (numberNights > 14 ){
                priceApartment -= priceApartment * (10/100)
            }
            break;
    }

    console.log(`Apartment: ${(priceApartment * numberNights).toFixed(2)} lv.`)
    console.log(`Studio: ${(priceStudio * numberNights).toFixed(2)} lv.`)
}

hotelRooms (["May", "15"])

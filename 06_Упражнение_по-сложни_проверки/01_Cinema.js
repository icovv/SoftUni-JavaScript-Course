function cinema (input) {

    let typeCinema = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let price = rows * columns

    switch (typeCinema) {
        case "Premiere":
            console.log(`${(price * 12.00).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${(price * 7.50).toFixed(2)} leva`);
            break;
        case "Discount":
            console.log(`${(price * 5.00).toFixed(2)} leva`);
            break;
    }
}

//cinema (["Premiere", "10", "12"])
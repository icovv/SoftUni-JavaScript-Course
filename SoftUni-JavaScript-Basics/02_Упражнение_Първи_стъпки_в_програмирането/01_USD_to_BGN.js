function converter(input) {

    let usd = Number(input[0]);
    let usdToBgn = Number(`${usd}` * 1.79549);

    console.log(usdToBgn)

}

converter(["22"])
function Yard(input){

    let priceSqMet = 7.61;
    let disc = 18/100;
    let sqMet = Number(input[0]);

    let discount = (priceSqMet * `${sqMet}`) * disc
    let finalPrice = (priceSqMet * `${sqMet}`) - `${discount}`

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)





}

Yard(["550"])
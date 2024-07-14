function kidsStore (input) {

    let tripPrice = Number(input[0]);
    let puzzleQuantity = Number(input[1]);
    let dollsQuantity = Number(input[2]);
    let bearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);
    
    let totalPrice = puzzleQuantity * 2.60 + dollsQuantity * 3 + bearsQuantity * 4.1 + minionsQuantity * 8.2 + trucksQuantity * 2
    let totalQuantity = puzzleQuantity + dollsQuantity + bearsQuantity + minionsQuantity + trucksQuantity

    if (totalQuantity >= 50) {
        totalPrice -= totalPrice * 0.25
    }

    totalPrice -= totalPrice * 0.1

    if (totalPrice >= tripPrice ) {
         console.log (`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`)
    } else if ( tripPrice > totalPrice) {
        console.log (`Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`)
    }

}

kidsStore(["320", "8", "2", "5", "5" , "1"])

function printDeckOfCards(cards){
    let print = [];
    for (let card of cards){
        let face = card.substring(0,card.length - 1);
        let suit = card.substring(card.length - 1);
        createCard(face,suit)
    }
    
    return console.log(print.join(` `));
    
    function createCard(face,suit){
        let faceArr = [`2`, `3` , `4`, `5`, `6`, `7`, `8`,`9`,`10` , `J`, `Q` , `K`, `A`];
        let suitArr = [`S`, `H`, `D`, `C`]
        let suitObj = {S: `\u2660`, H:`\u2665` , D:`\u2666` , C:`\u2663` }
    
        if (!faceArr.includes(face)){
            return console.log(`Invalid card: ${face}${suit}`)
        }
        if (!suitArr.includes(suit)){
            return console.log(`Invalid card: ${face}${suit}`)
        }
        let index = faceArr.indexOf(face);
        return  print.push(`${faceArr[index]}${suitObj[suit]}`)
    }

}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
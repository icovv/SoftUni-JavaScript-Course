function cardsGame (arr){
    let cardsInfo = {};
    let cardPower = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14};
    let cardType =  {C: 1, D: 2, H: 3, S: 4}
    for (let item of arr){
        let [name, cards] = item.split(`: `);
        let card = cards.split(`, `);
        if (cardsInfo[name]){
            for (let oneCard of card){
                cardsInfo[name].push(oneCard)
            }
        } else {
            cardsInfo[name] = card
        }
    }

    let cardsInfoArr = Object.entries(cardsInfo);
    
    for (let [name,playerCards] of cardsInfoArr){
        let uniquedeck = new Set(playerCards);
        let deckValue = 0;
        for (let unique of uniquedeck){
            let power = unique.slice(0, unique.length - 1);
            let type = unique[unique.length - 1];
            deckValue += cardPower[power] * cardType[type]
        }
        console.log(`${name}: ${deckValue}`)
    }

}
cardsGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])
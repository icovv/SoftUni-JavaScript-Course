// · \u2660 – Spades (♠)

// · \u2665 – Hearts (♥)

// · \u2666 – Diamonds (♦)

// · \u2663 – Clubs (♣)

function solve(face,suit){
    let faceArr = [`2`, `3` , `4`, `5`, `6`, `7`, `8`,`9`,`10` , `J`, `Q` , `K`, `A`];
    let suitArr = [`S`, `H`, `D`, `C`]
    let suitObj = {S: `\u2660`, H:`\u2665` , D:`\u2666` , C:`\u2663` }

    if (!faceArr.includes(face)){
        throw new Error(`Not within requirements for face input`)
    }
    if (!suitArr.includes(suit)){
        throw new Error(`Not within requirements for suits input`)
    }
    let index = faceArr.indexOf(face);
    return  `${faceArr[index]}${suitObj[suit]}`
}

console.log(solve('A', 'S'))
console.log(solve('10', 'H'))
console.log(solve('1', 'C'))
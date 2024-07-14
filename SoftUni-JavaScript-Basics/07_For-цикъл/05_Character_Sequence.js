function characterSequence (input) {

    let text = input[0];

    for (let symbol = 0; symbol < text.length ; symbol +=1){
        let letter = text[symbol];
        console.log(letter)
    }
}
characterSequence (["softuni"])
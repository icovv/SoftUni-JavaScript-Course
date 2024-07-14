function charactersInRange(symbol1,symbol2){
    let symbolAsASCII = symbol1.charCodeAt(0);
    let symbol2AsASCII = symbol2.charCodeAt(0);

    let firstSymbol = Math.min(symbolAsASCII, symbol2AsASCII)
    let secondSymbol = Math.max(symbolAsASCII, symbol2AsASCII)

    let output = ''
    for (let i = firstSymbol + 1; i < secondSymbol; i++){
        let symbolAsChar = String.fromCharCode(i);
        output += `${symbolAsChar} `
    }

    console.log(output)
}

// charactersInRange('a','d')
charactersInRange('#',':')
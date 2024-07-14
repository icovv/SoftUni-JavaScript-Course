function solve(input){
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi;
    let match = pattern.exec(input);
    let wordPairs = [];
    let output = [];
    while (match){
        let first = match[2];
        let second = match[3];
        wordPairs.push(`${first} & ${second}`)
       if (first == second.split(``).reverse().join(``)){
        output.push(`${first} <=> ${second}`)
       }
       match = pattern.exec(input);
    }
    if (wordPairs.length == 0){
        console.log(`No word pairs found!`)
    } else if (wordPairs.length > 0){
        console.log(`${wordPairs.length} word pairs found!`)
    }
    
    if (output.length == 0){
        console.log("No mirror words!")
    } else if (output.length > 0){
        console.log(`The mirror words are:`);
        console.log(`${output.join(`, `)}`);
    }
    
    
}
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
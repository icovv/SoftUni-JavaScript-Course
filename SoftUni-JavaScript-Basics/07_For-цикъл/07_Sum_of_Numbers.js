function sumOfNumbers (input) {

    let n = input[0];
    let total = 0

    for (let i = 0 ; i < n.length ; i += 1){
        let letter = Number(n[i]);
        total += letter

        
    }

    console.log(`The sum of the digits is:${total}`)
}

sumOfNumbers (["1234"])
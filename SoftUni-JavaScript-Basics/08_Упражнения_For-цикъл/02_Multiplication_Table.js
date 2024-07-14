function multiplicationTable (input) {
    let multiplicationNumber = Number(input[0]);

    for (i = 1; i <= 10 ; i += 1){
        console.log(`${i} * ${multiplicationNumber} = ${multiplicationNumber * i}`)
    }
}
multiplicationTable (["5"])
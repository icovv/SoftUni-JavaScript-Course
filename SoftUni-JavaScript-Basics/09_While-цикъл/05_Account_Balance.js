function accBalance (input) {
    let command = input[0];
    let total = 0;

    let i = 1;
    while (command !== `NoMoreMoney`) {
        let sum = Number(command)

        if (sum < 0 ){
            console.log("Invalid operation!")
            break;
        }

        console.log(`Increase: ${sum.toFixed(2)}`)

        total += sum
        
        command = input[i];
        i += 1;
        }    

    console.log(`Total: ${(total).toFixed(2)}`)
    }

accBalance (["5.51", 
"69.42",
"100",
"NoMoreMoney"])


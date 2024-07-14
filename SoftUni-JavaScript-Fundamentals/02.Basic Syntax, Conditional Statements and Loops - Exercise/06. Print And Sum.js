function sum (num1,num2) {
    let total = 0
    let output = ``;
    for (let it = num1 ; it <= num2 ; it += 1){
        total += it;
        output += `${it} `
    }
    console.log(output)
    console.log(`Sum: ${total}`)
}

sum(50, 60)
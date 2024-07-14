function solve(input){
    let command = input.shift();
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/
    let finalObj = []
    let finalPrice = 0;

    while(command != 'Purchase'){
    if (command.match(pattern)){
        let{name,price,qty} = command.match(pattern).groups
        finalPrice += Number(price) * Number(qty)
        finalObj.push(name)
        
    }
        command = input.shift()
    }
    console.log(`Bought furniture:`)
    if (finalObj.length > 0){
    for (let item of finalObj){
        console.log(item)
    }
    }
    console.log(`Total money spend: ${finalPrice.toFixed(2)}`)
}
// solve(['>>Sofa<<312.23!3',

// '>>TV<<300!5',

// '>Invalid<<!5',

// 'Purchase'])
// solve(['>>Laptop<<312.2323!3',

// '>>TV<<300.21314!5',

// '>Invalid<<!5',

// '>>TV<<300.21314!20',

// '>>Invalid<!5',

// '>>TV<<30.21314!5',

// '>>Invalid<<!!5',

// 'Purchase'])
solve(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])
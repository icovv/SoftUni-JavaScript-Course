function math(num,num1,num2){
    let total = num + num1 + num2;

    // Purvi variant za reshenie
    // if(total % 1 == 0){
    //     console.log(`${total} - Integer`)
    // } else {
    //     console.log(`${total} - Float`)
    // }


    // sukratena versiq
    total % 1 === 0 ? total += ` - Integer` : total += ` - Float`
    console.log(total)
}

math(9, 100, 1.1)
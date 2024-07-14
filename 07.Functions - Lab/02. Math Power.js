function mathPower(n,pow){
    let total = 1;
    for (let i = 0; i < pow; i ++){
        total *= n
    }
    console.log(total)
    //console.log(Math.pow(n,pow))    
}

mathPower(2,8)
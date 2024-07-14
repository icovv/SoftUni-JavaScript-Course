function amazing(num){
    num = num.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i])
    }
    sum = sum.toString()
    let isFalse = false;    
    for (let b = 0; b < sum.length ; b ++){
        if(sum[b] == `9`){
            isFalse = true;
            break;
        }
    }
    
    if(isFalse){
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`)
    }
}

amazing(999)
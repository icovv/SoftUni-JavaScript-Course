function solve(num,oper1,oper2,oper3,oper4,oper5){
    num = Number(num)
    // if (oper1 == `chop`){
    //     num /= 2;
    //     console.log(num)
    // }else if (oper1 == `dice`){
    //     num = Math.sqrt(num);
    //     console.log(num)
    // }else if (oper1 == `spice`){
    //     num += 1;
    //     console.log(num)
    // }else if (oper1 == `bake`){
    //     num *= 3;
    //     console.log(num)
    // }else if (oper1 == `fillet`){
    //     num = num - (num * 0.20);
    //     console.log(num)
    // }
    // if (oper2 == `chop`){
    //     num /= 2;
    //     console.log(num)
    // }else if (oper2 == `dice`){
    //     num = Math.sqrt(num);
    //     console.log(num)
    // }else if (oper2 == `spice`){
    //     num += 1;
    //     console.log(num)
    // }else if (oper2 == `bake`){
    //     num *= 3;
    //     console.log(num)
    // }else if (oper2 == `fillet`){
    //     num = num - (num * 0.20);
    //     console.log(num)
    // }
    // if (oper3 == `chop`){
    //     num /= 2;
    //     console.log(num)
    // }else if (oper3 == `dice`){
    //     num = Math.sqrt(num);
    //     console.log(num)
    // }else if (oper3 == `spice`){
    //     num += 1;
    //     console.log(num)
    // }else if (oper3 == `bake`){
    //     num *= 3;
    //     console.log(num)
    // }else if (oper3 == `fillet`){
    //     num = num - (num * 0.20);
    //     console.log(num)
    // }
    // if (oper4 == `chop`){
    //     num /= 2;
    //     console.log(num)
    // }else if (oper4 == `dice`){
    //     num = Math.sqrt(num);
    //     console.log(num)
    // }else if (oper4 == `spice`){
    //     num += 1;
    //     console.log(num)
    // }else if (oper4 == `bake`){
    //     num *= 3;
    //     console.log(num)
    // }else if (oper4 == `fillet`){
    //     num = num - (num * 0.20);
    //     console.log(num)
    // }
    // if (oper5 == `chop`){
    //     num /= 2;
    //     console.log(num)
    // }else if (oper5 == `dice`){
    //     num = Math.sqrt(num);
    //     console.log(num)
    // }else if (oper5 == `spice`){
    //     num += 1;
    //     console.log(num)
    // }else if (oper5 == `bake`){
    //     num *= 3;
    //     console.log(num)
    // }else if (oper5 == `fillet`){
    //     num = num - (num * 0.20);
    //     console.log(num)
    // }
    let operators = [];
    operators.push(oper1,oper2,oper3,oper4,oper5);
    for (let item of operators){
        if (item == `chop`){
            num /= 2;
            console.log(num)
        }else if (item == `dice`){
             num = Math.sqrt(num);
            console.log(num)
        }else if (item == `spice`){
            num += 1;
            console.log(num)
        }else if (item == `bake`){
            num *= 3;
            console.log(num)
        }else if (item == `fillet`){
            num = num - (num * 0.20);
            console.log(num)
        }
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake','fillet')
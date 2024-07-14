function solve(arr){
let list = [];

    function operator(number1,number2,oper){
        if (oper == `+`){
            return number1 + number2
        } else if (oper == `-`){
            return number1 - number2
        } else if (oper == `*`){
            return number1 * number2
        } else if (oper == `/`){
            return number1 / number2
        }
    }

    for (let el of arr){
        if (typeof el == `number`){
            list.push(el)
            continue;
        }
        if (list.length < 2){
            console.log(`Error: not enough operands!`);
            return;
        }
        let num2 = list.pop();
        let num1 = list.pop();
        list.push(operator(num1,num2,el));
    }

    if (list.length > 1){
        console.log(`Error: too many operands!`)
    } else if (typeof arr[0] != `number` || typeof arr[1] != `number`){
        console.log(`Error: not enough operands!`)
    } else {
        console.log(list[0].toString())
    }
}
solve([5,

    3,
    
    4,
    
    '*',
    
    '-'])
function solve(text){
    let tasks = text.split(` `)
    let output = 0;
   for (let letter of tasks){
        if (letter.length <= 0){
            continue;
        }
        let first = letter[0];
        let second = letter[letter.length - 1];
        let num = Number(letter.substring(1,letter.length - 1));
        if (first == first.toUpperCase()){
            let firstNum = Number(first.charCodeAt() - 64)
            num = num / firstNum
        } else if (first == first.toLowerCase()){
            let secondNum = Number(first.charCodeAt() - 96)
            num = num * secondNum
        }

        if (second == second.toUpperCase()){
            let thirdNum = Number(second.charCodeAt() - 64)
            num = num - thirdNum
        } else if (second == second.toLowerCase()){
            let forthNum = Number(second.charCodeAt() - 96)
            num = num + forthNum
        }
        output+= num
    }
    console.log(output.toFixed(2))
}
solve('P34562Z q2576f      H456z')
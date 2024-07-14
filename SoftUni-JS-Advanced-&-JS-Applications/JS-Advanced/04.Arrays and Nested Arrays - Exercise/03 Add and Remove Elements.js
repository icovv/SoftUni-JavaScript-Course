function solve(commands){
    let n = 0;
    let output = [];
    for (let command of commands){
        if (command == `add`){
            n += 1
            output.push(n)
        } else if (command == `remove`){
            n += 1
            output.pop()
        }
    
    }
    if (output.length == 0){
        console.log(`Empty`)
    } else {
        for (let item of output){
            console.log(item)
        }
    }
}
// solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])
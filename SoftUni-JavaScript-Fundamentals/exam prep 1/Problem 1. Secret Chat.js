function solve (input){
    let message = input.shift();
    let command = input.shift()
    while (command != 'Reveal'){
        let task = command.split(`:|:`);
        let operation = task[0];

        switch(operation){
            case `InsertSpace` :
                let index = Number(task[1]);
                let firstPart = message.slice(0,index);
                let secondPart = message.slice(index);
                message = firstPart + ` ` + secondPart;
                console.log(message)
            break;
            case `Reverse` :
                let substring = task[1];
                let reversedSubstring = substring.split(``).reverse().join(``)
                let firstIndex = message.indexOf(substring)
                if (firstIndex == -1 ){
                    console.log(`error`)
                    break;
                } 
                let first = message.slice(0,firstIndex);
                let second = message.slice(firstIndex + substring.length)
                message = first + second + reversedSubstring;
                console.log(message)
            break;
            case `ChangeAll` :
                let toBeReplaced = `${task[1]}`;
                let replacement = `${task[2]}`;
                let parts = message.split(toBeReplaced);
                message = parts.join(replacement)
                console.log(message)
            break;
        }
    
    
        command = input.shift()
    }
    console.log(`You have a new text message: ${message}`)
}

solve([

    'Hiware?uiy',
    
    'ChangeAll:|:z:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ])
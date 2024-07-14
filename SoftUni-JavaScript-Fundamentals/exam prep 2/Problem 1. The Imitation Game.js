function solve(input){
    let message = input.shift();
    let command = input.shift()
    while (command != `Decode`){
        let commandSplit = command.split(`|`);
        let toDo = commandSplit[0];

        if (toDo == `Move`){
            let nToMove = commandSplit[1];
            let firstPart = message.slice(0,nToMove);
            let secondPart = message.slice(nToMove);
            message = secondPart + firstPart;
        } else if (toDo == `Insert`){
            let index = commandSplit[1];
            let toAdd = commandSplit[2];
            let firstPartSentance = message.slice(0,index);
            let secondPartSentance = message.slice(index);
            message = firstPartSentance + `${toAdd}` + secondPartSentance;
        } else if (toDo == `ChangeAll`){
            let substring = commandSplit[1];
            let replacement = commandSplit[2];
            let parts = message.split(substring);
            message = parts.join(replacement)
        }
        
        
        command = input.shift()
    }
    console.log(`The decrypted message is: ${message}`)
}
solve([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])

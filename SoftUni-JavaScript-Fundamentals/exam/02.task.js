function numbers(arr){
    let startNums = arr.shift().split(` `).map(Number);
    for (let i = 0; i < arr.length; i++){
        let nextCommand = arr[i].split(` `);
        let command = nextCommand[0]
        let number = Number(nextCommand[1]);
        let numberReplace = Number(nextCommand[2]);
        if (command == `Finish`){
            console.log(startNums.join(` `));
            return;
        } else if (command == `Add`){
            startNums.push(number)
        } else if (command == `Remove`){ 
            let indexToRemove = startNums.indexOf(number);
            if (indexToRemove === -1){
                continue;
            } else {
                startNums.splice(indexToRemove,1)
            }
        } else if (command == `Replace`){
            let indexToReplace = startNums.indexOf(number);
            if (indexToReplace === -1){
                continue;
            } else {
                startNums.splice(indexToReplace,1,numberReplace)
            }
        } else if (command == `Collapse`){
            startNums = startNums.filter(section => section >= number)
        }
    }
    console.log(startNums.join(` `));
}
// numbers((["1 4 5 19","Add 1","Remove 4","Finish"]))
numbers((["9 9 9 9 9 9", "Collapse 8", "Finish"]))
// numbers((["1 20 -1 10",

// "Collapse 8",

// "Finish"]))

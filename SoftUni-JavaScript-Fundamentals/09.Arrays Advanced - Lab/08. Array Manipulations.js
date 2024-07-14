function manipulations(arr){
    let array = arr[0].split(` `).map(Number);
  
    for(let i = 1; i < arr.length; i ++){
        let actions = arr[i].split(` `);
        let command = actions[0];
        let commandNum = Number(actions[1]);
        let secondCommandNum = Number(actions[2]);

        if (command == `Add`){
            array.push(commandNum)
        } else if (command == `Remove`){
            for (let j = 0; j < array.length; j++){
                let currentNumFromArray = array[j]
                let index = array.indexOf(array[j])
                if (currentNumFromArray === commandNum){
                    let index = array.indexOf(array[j])
                    array.splice(index, 1)
                }
            }
        } else if (command == `RemoveAt`){
            array.splice(commandNum,1);
        } else if (command == `Insert`){
            array.splice(secondCommandNum,0,commandNum)
        }
    }
    console.log(array.join(` `))
}
manipulations(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])
manipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])
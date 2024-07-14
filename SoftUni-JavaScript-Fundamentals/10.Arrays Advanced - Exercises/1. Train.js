function train(arr){
    let wagons = arr[0].split(` `).map(Number);
    let maxCapacity = Number(arr[1]);
    for (let i = 2; i < arr.length; i++){
        let commands = arr[i].split(` `);
        let task = commands[0];
        let num = Number(commands[1]);
        
        if(task == `Add`){
            wagons.push(num)
        } else{
            task = Number(task)
            for (let j = 0; j < wagons.length; j ++){
                let numberOfWag = wagons[j]
                if(numberOfWag + task <= maxCapacity){
                    let indexOfCurrWag = wagons.indexOf(wagons[j])
                    wagons.splice(indexOfCurrWag,1,wagons[j] + task)
                    break;
                }
            }
        }
    }
    console.log(wagons.join(` `))
}

train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])

train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])
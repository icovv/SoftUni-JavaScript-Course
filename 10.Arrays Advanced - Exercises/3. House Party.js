function party(arr){
    let finalList = []
     for (let i = 0; i < arr.length; i++){
        let command = arr[i].split(` `);
        let name = command[0];
        let decision = command[2];

        if(decision == `going!`){
            if (!finalList.includes(name)){
                finalList.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (finalList.includes(name)){
                let indexOfName = finalList.indexOf(name);
                finalList.splice(indexOfName,1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
     }
     console.log(finalList.join(`\n`))
}
// party(['Allie is going!',

// 'George is going!',

// 'John is not going!',

// 'George is not going!'])
party(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])
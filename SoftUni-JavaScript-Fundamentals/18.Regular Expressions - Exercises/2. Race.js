function solve(input){
    let racers = input.shift().split(`, `);
    let command = input.shift()
    let results = {};
    for (let someone of racers){
        results[someone] = 0
    }
    let namePattern = /[A-Za-z]/g;
    let pointsPattern = /\d/g;
    while (command != `end of race`){
        let commandName = command.match(namePattern).join(``);
        let commandPoints = command.match(pointsPattern).map(number=> Number(number)).reduce((acc,val) => acc + val);
        if(commandName in results){
            results[commandName] += commandPoints
        }

        command = input.shift()
    }
    let finalResult = Object.entries(results);

    finalResult.sort((a,b) => b[1] - a[1])

    console.log(`1st place: ${finalResult[0][0]}`)
    console.log(`2nd place: ${finalResult[1][0]}`)
    console.log(`3rd place: ${finalResult[2][0]}`)
    
}
solve(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])
function solve(num){
    if (num == `Sunday` ||num == `Saturday` ||num == `Friday` ||num == `Thursday` ||num == `Wednesday` ||num == `Tuesday` ||num == `Monday`){    
    switch(num){
            case `Sunday`:
                console.log(`7`)
            break;
            case `Saturday`:
                console.log(`6`)
            break;
            case `Friday`:
                console.log(`5`)
            break;
            case `Thursday`:
                console.log(`4`)
            break;
            case `Wednesday`:
                console.log(`3`)
            break;
            case `Tuesday`:
                console.log(`2`)
            break;
            case `Monday`:
                console.log(`1`)
            break;
        }
    } else {
        console.log(`error`)
    }
}
solve('Monday')
solve('Invalid')
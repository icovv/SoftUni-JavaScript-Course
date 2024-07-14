function solve(something){
    if (typeof something == `number`){
        console.log((Math.pow(something,2)*Math.PI).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof something}.`)
    }
}
solve(5)
solve(`name`)
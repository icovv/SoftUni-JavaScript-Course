function solve(x1,y1,x2,y2){
    x1 = Number(x1)
    y1 = Number(y1)
    x2 = Number(x2)
    y2 = Number(y2)

    if (Number.isInteger(Math.sqrt((x1 - 0)**2 + (y1 - 0)**2))){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(Math.sqrt((x2 - 0)**2 + (y2 - 0)**2))){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(Math.sqrt((x1 - x2)**2 + (y1 - y2)**2))){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
solve(3, 0, 0, 4)
solve(2, 1, 1, 1)
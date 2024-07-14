function solve(a){
    a = a.toString()
    let arr = a.split(``);
    let prevItem = ``;
    let total = 0;
    for(let item of arr){
        if (item == prevItem){
            total +=1
        }
        prevItem = item
    }

    if(total == arr.length - 1){
        console.log(`true`)
    } else {
        console.log(`false`)
    }
    let output = 0
    for (let num of arr){
        output += Number(num)
    }
     console.log(output)
}
solve(1234)
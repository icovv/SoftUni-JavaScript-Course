function solve(...params){
    let result = {}
    for (let item of params){
        console.log(`${typeof(item)}: ${item}`)
        if (!result.hasOwnProperty(typeof(item))){
            result[typeof(item)] = 0
        } 
            result[typeof(item)] += 1
        
    }
    let resArr = Object.entries(result).sort((a,b) => b[1] - a[1]).forEach((x) => console.log(`${x[0]} = ${x[1]}`))
}
solve('cat', 42,55, function () { console.log('Hello world!'); })
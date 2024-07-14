function solve(names){
    names.sort((a,b) => a.localeCompare(b)).forEach((x,i) => { console.log(`${i + 1}.${x}`)})
    // for (let i = 1; i<=names.length;i++ ){
    //     console.log(`${i}.${names[i - 1]}`)
    // }
}
solve(["John",

"Bob",

"Christina",

"Ema"])
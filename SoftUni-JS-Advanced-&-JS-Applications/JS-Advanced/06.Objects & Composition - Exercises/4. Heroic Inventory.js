function solve(arr){
    let output = []
    for (let item of arr){
        let name = item.split(` / `)[0];
        let level = Number(item.split(` / `)[1]);
        let items =  item.split(` / `)[2];
        items = items ? items.split(`, `) : [];
        output.push({name, level, items})        
    }
    console.log(JSON.stringify(output))
}
solve(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])
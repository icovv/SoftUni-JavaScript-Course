function heroes(heroes){
    let object = [];
    for (let heroe of heroes){
        let name= heroe.split(` / `)[0];
        let level = Number(heroe.split(` / `)[1]);
        let items = heroe.split(` / `)[2];
        let heroeObj = {name: name, level: level, items:items}
        object.push(heroeObj)
    }
    
    
    object.sort((a,b) => a.level - b.level).map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))  
}

heroes([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])
function solve(input){
    let numberOfHeroes = input.shift();
    let heroes = {};
    for (let i = 0; i < numberOfHeroes; i++){
        let command = input.shift()
        let heroName = command.split(` `)[0]
        let hp = Number(Math.min(command.split(` `)[1], 100))
        let mp = Number(Math.min(command.split(` `)[2], 200))
        let hero = {
            heroName: heroName,
            hp: hp,
            mp: mp,
        }
        heroes[heroName] = hero
    }
    
    while(input != `End`){
        let spell = input[0].split(` - `)[0];
        let spellHero = input[0].split(` - `)[1];
        let heroe = heroes[spellHero];

        switch(spell){
            case `CastSpell`:
                let mpReq = Number(input[0].split(` - `)[2]);
                let spellName = input[0].split(` - `)[3];
                if (heroe.mp >= mpReq){
                    heroe.mp = heroe.mp - mpReq
                    console.log(`${heroe.heroName} has successfully cast ${spellName} and now has ${heroe.mp} MP!`);
                } else {
                    console.log(`${heroe.heroName} does not have enough MP to cast ${spellName}!`)
                }
                break;
            case `TakeDamage`:
                let damage = Number(input[0].split(` - `)[2]);
                let attacker = input[0].split(` - `)[3];
                heroe.hp = heroe.hp - damage;
                if (heroe.hp <= 0){
                    console.log(`${heroe.heroName} has been killed by ${attacker}!`)
                    delete heroes[heroe.heroName]
                } else{
                    console.log(`${heroe.heroName} was hit for ${damage} HP by ${attacker} and now has ${heroe.hp} HP left!`)
                }
                break;
            case `Recharge`:
                let amount = Number(input[0].split(` - `)[2]);                
                if (heroe.mp + amount > 200){
                    amount = 200 - heroe.mp
                }
                heroe.mp += amount
                console.log(`${heroe.heroName} recharged for ${amount} MP!`)
                break;
            case `Heal`:;
                let amountHealed = Number(input[0].split(` - `)[2]);                
                if (heroe.hp + amountHealed > 100){
                    amountHealed = 100 - heroe.hp
                }
                heroe.hp += amountHealed
                console.log(`${heroe.heroName} healed for ${amountHealed} HP!`)
                break;
        }
        input.shift()
    }
   let output = Object.entries(heroes);

   for (let herou of output) {
    console.log(herou[1].heroName);
    console.log(`  HP: ${herou[1].hp}`)
    console.log(`  MP: ${herou[1].mp}`)
   }
}
solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ])
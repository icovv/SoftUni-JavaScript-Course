function darkDungeon (arr){
    let arrToText = arr[0];
    let arrSplit = arrToText.split(`|`)
    
    let health = 100;
    let coins = 0;
    
    for(let i = 0; i < arrSplit.length; i ++){
        let arrSplitSeparated = arrSplit[i].split(` `);

        let command = arrSplitSeparated[0];
        let points = Number(arrSplitSeparated[1]);

        if (command === `potion`){
            health += points;
            if (health >= 100){
                console.log(`You healed for ${points - (health - 100)} hp.`)
                health = 100;
                console.log(`Current health: ${health} hp.`)
            } else {
                console.log(`You healed for ${points} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
        } else if (command === `chest`){
            coins += points
            console.log(`You found ${points} coins.`)
        } else {
            health -= points
            if (health > 0){
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${i + 1}`)
                break;
            }
        }
        }
        if (health > 0){
            console.log(`You've made it!`)
            console.log(`Coins: ${coins}`)
            console.log(`Health: ${health}`)
        }
}
// darkDungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
darkDungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
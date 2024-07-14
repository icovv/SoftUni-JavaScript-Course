function muOnline (arr){
    let arraySplit = arr.split(`|`);
    let health = 100;
    let bitcoins = 0;
    
    for (let i = 0; i < arraySplit.length ; i++){
        let split = arraySplit[i].split(` `)
        let command = split[0];
        let amount = Number(split[1]);
        
      if (command === `potion`){
        health += amount;
        if (health >= 100){
            console.log(`You healed for ${100 - (health - amount)} hp.`);
            console.log(`Current health: 100 hp.`);
            health = 100;
        } else {
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
        }
      } else if (command == `chest`){
        bitcoins += amount;
        console.log(`You found ${amount} bitcoins.`)
      } else {
        health -= amount;
        if (health > 0){
            console.log(`You slayed ${command}.`)
        } else {
            console.log(`You died! Killed by ${command}.`)
            console.log(`Best room: ${i + 1}`);
            break;
        }
      }
    }
    if (health > 0){
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
function manOWar(arr){
    let pirateShip = arr.shift().split(`>`).map(Number);
    let warship = arr.shift().split(`>`).map(Number);
    let maxHealth = Number(arr.shift());
    let twentyPercentageFromHealth = maxHealth * 0.2;
    
    
    for (let i = 0 ; i < arr.length; i ++){
        let arrSplit = arr[i].split(` `);
        let command = arrSplit[0];
        let index1 = Number(arrSplit[1]);
        let index2 = Number(arrSplit[2]);
        let index3 = Number(arrSplit[3]);

        if (command == `Retire`){
            break;
        } else if (command == `Fire`){
            if (index1 <  0 || index1 >= warship.length){
                continue;
            }
            warship[index1] -= index2;

            if (warship[index1] <= 0){
                console.log(`You won! The enemy ship has sunken.`)
                return;
            }
        } else if (command == `Defend`){
            if (index1 <  0 || index1 >= pirateShip.length || index2 < 0 || index2 >= pirateShip.length){
                continue;
            }
            for (let i = index1; i <= index2; i++){
                pirateShip[i] -= index3
                if (pirateShip[i] <= 0){
                    console.log(`You lost! The pirate ship has sunken.`)
                    return;
                }
            }
        } else if (command == `Repair`){
            if (index1 < 0 || index1 >= pirateShip.length){
                continue;
            }
            pirateShip[index1] += index2
            if (pirateShip[index1] > maxHealth){
                pirateShip[index1] = maxHealth
            }

        } else if (command == `Status`){
            let lowHpPirateShip = pirateShip.filter(health => health < twentyPercentageFromHealth);
            console.log(`${lowHpPirateShip.length} sections need repair.`)
        }
    }

    let pirateShipHpCount = 0;
    for (let i = 0; i < pirateShip.length; i++){
        pirateShipHpCount += pirateShip[i]
    }

    let warshipHpCount = 0;
    for (let i = 0; i < warship.length; i ++){
        warshipHpCount += warship[i]
    }
    console.log(`Pirate ship status: ${pirateShipHpCount}`)
    console.log(`Warship status: ${warshipHpCount}`)
    
}

// manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"])
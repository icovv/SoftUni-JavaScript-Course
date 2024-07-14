function gladiator (lostFights, helmet, sword, shield, armor){
    let counter = 1;
    let expenses = 0;
    let swordHelmet = 0;
    let shiedlCounter = 0;

    while(lostFights > 0){
        if (counter % 2 === 0){
            expenses += helmet
            swordHelmet += 1
        }
        if (counter % 3 === 0){
            expenses += sword
            swordHelmet += 1
        }
        if (swordHelmet === 2){
            expenses += shield
            shiedlCounter += 1
        }
        if(shiedlCounter === 2){
            expenses += armor
            shiedlCounter = 0
        }
        counter ++
        lostFights --
        swordHelmet = 0; 
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiator(23,

    12.50,
    
    21.50,
    
    40,
    
    200)

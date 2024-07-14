function solve(text){
    let splitPattern = /[, ]+/g
    let input = text.split(splitPattern);
    let firstPattern = /[^0-9+\-*\/.]/g;
    let secondPattern =  /[+-]?\d+\.?[\d]*/g;
    let thirdPattern = /[\/*]/g
    let hero = {}
    
    for (let item of input){
        let heroHealth = 0;
        let heroDMG = 0;
        if (item.match(firstPattern) != null){
        for (let letter of item.match(firstPattern)){
            heroHealth += Number(letter.charCodeAt())
        }  
     }

        if (item.match(secondPattern) != null){
        for (let num of item.match(secondPattern)){
            heroDMG += Number(num)
        }
        }
        if (item.match(thirdPattern) != null){
        for (let thing of item.match(thirdPattern)){
            if (thing == `*`){
                heroDMG *= 2;
            } else if (thing == `/`){
                heroDMG /= 2
            }
        }
        }
        hero[item] = {};
        hero[item][`health`] = heroHealth;
        hero[item][`damage`] = heroDMG
        }
       
    let sorted = Object.entries(hero).sort((a,b) => a[0].localeCompare(b[0]));
    for (let demon of sorted){
        console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage.toFixed(2)} damage`)
    }
}
// solve(`M3ph-0.5s-0.5t0.0**`)
solve(`M3ph1st0**, Azazel`)
// solve(`Gos/ho`)
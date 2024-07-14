function solve(input){
    let city = input.shift();
    let cityItems ={};
    while(city != `Sail`){
        let name = city.split(`||`)[0];
        let population = Number(city.split(`||`)[1]);
        let gold = Number(city.split(`||`)[2]);
        if (cityItems[name]){
            cityItems[name].population += population;
            cityItems[name].gold += gold
        } else {
            cityItems[name] = {
            population: population,
            gold: gold
            }
        }
        city = input.shift();
    }
    let command = input.shift()
    while(command != `End`){
        let toDo = command.split(`=>`)[0];
        if (toDo == `Plunder` ){
            let townName = command.split(`=>`)[1];
            let town = cityItems[townName];
            let peopleKilled = Number(command.split(`=>`)[2]);
            let goldStolen = Number(command.split(`=>`)[3]);
            if (town.gold <= 0 || town.population <= 0){
                console.log(`"${townName} has been wiped off the map!"`)
            } else{
                town.gold -= goldStolen;
                town.population -= peopleKilled;
                console.log(`${townName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`)
            }
            if (town.gold <= 0 || town.population <= 0){
                delete cityItems[townName]
                console.log(`${townName} has been wiped off the map!`)
            } 
        } else if (toDo == `Prosper`){
            let townToDo = command.split(`=>`)[1];
            let goldToGive = Number(command.split(`=>`)[2]);
            let townToGive = cityItems[townToDo];
            if (goldToGive < 0){
                console.log(`Gold added cannot be a negative number!`)
            } else {
                townToGive.gold += goldToGive
                console.log(`${goldToGive} gold added to the city treasury. ${townToDo} now has ${townToGive.gold} gold.`)
            }
        }
        command = input.shift() 
    }
    let outputObj = Object.entries(cityItems);
    
    if(outputObj.length > 0 ){
        console.log(`Ahoy, Captain! There are ${outputObj.length} wealthy settlements to go to:`)
        for (let city of outputObj){
            console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`)
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
}
solve(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"])
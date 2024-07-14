function solve(arr){
    let populationRecord = {};
    for (let item of arr){
        let cityName = item.split(` <-> `)[0];
        let population = Number(item.split(` <-> `)[1]);
        if (populationRecord.hasOwnProperty(cityName)){
            populationRecord[cityName] += population
        } else {
            populationRecord[cityName] = population
        }
    }
    let object = Object.entries(populationRecord);
    for (let [city,popul] of object){
        console.log(`${city} : ${popul}`)
    }
}
solve(['Sofia <-> 1200000',

'Sofia <-> 12',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])
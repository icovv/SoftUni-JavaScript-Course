function solve(obj){
    let output = {
        model: obj.model,
        engine: undefined,
        carriage: {type: obj.carriage, color: obj.color},
        wheels: undefined
    }

    if (obj.power <= 90){
        output.engine = {power: 90, volume: 1800}
    } else if (obj.power <= 120){
        output.engine = {power: 120, volume: 2400}
    } else if (obj.power <= 200) {
        output.engine = {power: 200, volume: 3500}
    }

    let wheel = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    output.wheels = [wheel,wheel,wheel,wheel]
    return output

}
solve({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 })
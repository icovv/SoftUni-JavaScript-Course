function solve(speed,zone){
    speed = Number(speed)
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch(zone){
        case `motorway`:
            if (speed <= motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`)
            } else {
                if (speed - motorwayLimit > 0 &&speed - motorwayLimit <= 20){
                    console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - speeding`)
                } else if (speed - motorwayLimit > 20 && speed - motorwayLimit <= 40 ) {
                    console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - excessive speeding`)
                } else {
                    console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - reckless driving`)
                }
                }
        break;
        case `interstate`:
            if (speed <= interstateLimit) {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`)
            break;          
            } else {
                if (speed - interstateLimit > 0 && speed - interstateLimit <= 20){
                    console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - speeding`)
                } else if (speed - interstateLimit > 20 && speed - interstateLimit <= 40 ) {
                    console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - excessive speeding`)
                } else {
                    console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - reckless driving`)
                }
                }
        break;          
            case `city`:
            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`)
            } else {
                if (speed - cityLimit > 0 &&speed - cityLimit <= 20){
                    console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - speeding`)
                } else if (speed - cityLimit > 20 && speed - cityLimit <= 40 ) {
                    console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`)
                } else {
                    console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - reckless driving`)
                }
            }
            break;
            case `residential`:
                if (speed <= residentialLimit) {
                    console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`)
                } else {
                    if (speed - residentialLimit > 0 &&speed - residentialLimit <= 20){
                        console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - speeding`)
                    } else if (speed - residentialLimit > 20 && speed - residentialLimit <= 40 ) {
                        console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`)
                    } else {
                        console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`)
                    }
                }       
            break;   
            }
}
solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')
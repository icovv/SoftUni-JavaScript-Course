
// For Judge
function clock () {
    for (let hours = 0; hours <= 23; hours ++) {
        for (let mins = 0; mins <= 59; mins ++) {
            console.log(`${hours}:${mins}`)
        }
    }
}
clock()








// proper way
//function clock () {
    for (let hours = 0; hours <= 23; hours ++) {
        for (let mins = 0; mins <= 59; mins ++) {
            if (mins < 10 && !(hours < 10)) {
                console.log(`${hours}:0${mins}`);
            } else if (mins < 10 && hours < 10){
                console.log(`0${hours}:0${mins}`);
            } else if (mins >= 10 && hours < 10) {
                console.log(`0${hours}:${mins}`);
            } else if (mins >= 10 && hours >= 10){
                console.log(`${hours}:${mins}`);
            }
            
        }
    }
//}
//clock()
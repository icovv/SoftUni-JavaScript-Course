function swimmingRecord (input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let reqiuredTimeFor1Metre = Number(input[2]);

    let timeDelay = Math.floor(distanceInMetres / 15) * 12.5
    let requiredTimeForRace = reqiuredTimeFor1Metre * distanceInMetres 
    let timeAfterDelay = requiredTimeForRace + timeDelay

    if (timeAfterDelay < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(timeAfterDelay).toFixed(2)} seconds.`)
    } else if (timeAfterDelay >= recordInSeconds) {
        console.log(`No, he failed! He was ${(timeAfterDelay - recordInSeconds).toFixed(2)} seconds slower.`)
    }
}

swimmingRecord (["10464", "1500", "20"])



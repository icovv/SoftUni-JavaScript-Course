function solve(steps,lengthInM,kmInH){
// The first is the number of steps the student takes from their home to the university
// The second number is the length of the student's footprint in meters
// Тhe third number is the student speed in km/h
// every 500 metres the student takes 1 min rest
    let distance = steps* lengthInM;
    let speedInMPerSec = kmInH / 3.6;
    let timeInSec = distance/speedInMPerSec;
    let restInMin = Math.floor(distance/500);

    let min = Math.floor(timeInSec/60);
    let hour = Math.floor(timeInSec/3600);
    let sec = Math.round(timeInSec - (min * 60))

    console.log((hour < 10 ? "0" : "") + hour + ":" + (min + restInMin < 10 ? "0" : "") + (min + restInMin) + ":" + (sec < 10 ? "0" : "") + sec);
}
solve(4000, 0.60, 5)
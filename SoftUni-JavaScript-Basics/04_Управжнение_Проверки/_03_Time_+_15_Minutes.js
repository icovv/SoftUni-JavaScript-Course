function timePlusFifteen (input) {

    let hours = Number (input[0]);
    let minutes = Number (input[1]);

    let finalHours = hours * 60;
    let fullTime = finalHours + minutes;
    let finalFullTime = fullTime + 15;

    let hoursFinal = Math.floor(finalFullTime / 60);
    let minutesFinal = finalFullTime % 60;  

    if (hoursFinal === 24) {
        hoursFinal = 0
    } 

    if (minutesFinal < 10 ){
        console.log (`${hoursFinal}:0${minutesFinal}`);
    } else {
        console.log(`${hoursFinal}:${minutesFinal}`);
    }

}


timePlusFifteen(["23", "59"]) 
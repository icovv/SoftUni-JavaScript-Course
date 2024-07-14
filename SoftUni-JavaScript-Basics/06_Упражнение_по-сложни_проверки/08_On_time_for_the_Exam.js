function testTime(input) {
    let hourOfTest = Number(input[0]);
    let minuteOfTest = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    
    let mm = 0;
    let hh = 0;
    let time = "";
    let sumMinetsTest = (hourOfTest * 60) + minuteOfTest;
    let sumMinetsArrival = (arrivalHour * 60) + arrivalMinute;
    
    if (sumMinetsTest - sumMinetsArrival < 0) {
        time = "Late";
    } else if ((sumMinetsTest - sumMinetsArrival) >=0 && (sumMinetsTest - sumMinetsArrival) <= 30) {
        time = "On time";
    } else if (sumMinetsTest - sumMinetsArrival > 30) {
        time = "Early";
    }
    console.log(time);
    
    if (sumMinetsTest - sumMinetsArrival > 0 && sumMinetsTest - sumMinetsArrival < 60 ) {
        mm = Math.abs(sumMinetsTest - sumMinetsArrival);
        console.log(`${mm} minutes before the start`);
        
    } else if (sumMinetsTest - sumMinetsArrival >= 60) {
        hh = Math.floor((sumMinetsTest - sumMinetsArrival) / 60);
        mm = (sumMinetsTest - sumMinetsArrival) % 60;
        if (mm < 10) {
            console.log(`${hh}:0${mm} hours before the start`);
        } else {
            console.log(`${hh}:${mm} hours before the start`);
        }
    } else if (sumMinetsTest - sumMinetsArrival < 0 && sumMinetsTest - sumMinetsArrival > -60 ) {
        mm = Math.abs(sumMinetsArrival - sumMinetsTest);
        console.log(`${mm} minutes after the start`);
        
    } else if (sumMinetsTest - sumMinetsArrival <= -60 ) {
        hh = Math.floor((sumMinetsArrival - sumMinetsTest) / 60);
        mm = (sumMinetsArrival - sumMinetsTest) % 60;
        if (mm < 10) {
            console.log(`${hh}:0${mm} hours after the start`);
        } else {
            console.log(`${hh}:${mm} hours after the start`);
        }
    }
}
function workingHours (input) {

    let workHour = Number(input[0]);
    let dayOfTHeWeek = input[1];

    switch (dayOfTHeWeek) {
        case "Monday":
            if (workHour >= 10 && workHour <= 18 ){
                console.log("open");
            } else {
                console.log("closed")
            }
        break;
        case "Tuesday":
            if (workHour >= 10 && workHour <= 18 ){
                console.log("open");
            } else {
                console.log("closed")
            }
        break;
        case "Wednesday":
            if (workHour >= 10 && workHour <= 18 ){
                console.log("open");
            } else {
                console.log("closed")
            }
        break;
        case "Thursday":
            if (workHour >= 10 && workHour <= 18 ){
                console.log("open");
            } else {
                console.log("closed")
            }
        break;
        case "Friday":
            if (workHour >= 10 && workHour <= 18 ){
                console.log("open");
            } else {
                console.log("closed")
            }
        break;
        case "Saturday":
            if (workHour >= 10 && workHour <= 18 ){
                console.log("open");
            } else {
                console.log("closed")
            }
        break;
        case "Sunday":
            console.log("closed")

    }


}

workingHours (["11", "Monday"])
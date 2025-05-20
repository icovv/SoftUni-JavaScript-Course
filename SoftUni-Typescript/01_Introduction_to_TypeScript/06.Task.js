function reversedDayOfTheWeek(text) {
    var ReversedDays;
    (function (ReversedDays) {
        ReversedDays[ReversedDays["Monday"] = 1] = "Monday";
        ReversedDays[ReversedDays["Tuesday"] = 2] = "Tuesday";
        ReversedDays[ReversedDays["Wednesday"] = 3] = "Wednesday";
        ReversedDays[ReversedDays["Thursday"] = 4] = "Thursday";
        ReversedDays[ReversedDays["Friday"] = 5] = "Friday";
        ReversedDays[ReversedDays["Saturday"] = 6] = "Saturday";
        ReversedDays[ReversedDays["Sunday"] = 7] = "Sunday";
    })(ReversedDays || (ReversedDays = {}));
    return ReversedDays[text] ? ReversedDays[text] : "error";
}
console.log(reversedDayOfTheWeek("Monday"));
console.log(reversedDayOfTheWeek("Friday"));
console.log(reversedDayOfTheWeek("Invalid"));

function checkDayOfTheWeek(num1) {
    var DayOfTheWeek;
    (function (DayOfTheWeek) {
        DayOfTheWeek[DayOfTheWeek["Monday"] = 0] = "Monday";
        DayOfTheWeek[DayOfTheWeek["Tuesday"] = 1] = "Tuesday";
        DayOfTheWeek[DayOfTheWeek["Wednesday"] = 2] = "Wednesday";
        DayOfTheWeek[DayOfTheWeek["Thursday"] = 3] = "Thursday";
        DayOfTheWeek[DayOfTheWeek["Friday"] = 4] = "Friday";
        DayOfTheWeek[DayOfTheWeek["Saturday"] = 5] = "Saturday";
        DayOfTheWeek[DayOfTheWeek["Sunday"] = 6] = "Sunday";
    })(DayOfTheWeek || (DayOfTheWeek = {}));
    console.log(DayOfTheWeek[num1] || "error");
}
checkDayOfTheWeek(22);

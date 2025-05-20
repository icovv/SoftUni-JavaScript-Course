function checkDayOfTheWeek(num1:number): void{
    enum DayOfTheWeek{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(DayOfTheWeek[num1] || "error");
}


checkDayOfTheWeek(22);
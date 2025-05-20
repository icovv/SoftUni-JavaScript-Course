function reversedDayOfTheWeek(text:string):number | string{
    enum ReversedDays{
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    return ReversedDays[text as keyof typeof ReversedDays]? ReversedDays[text as keyof typeof ReversedDays] : "error"
}

console.log(reversedDayOfTheWeek("Monday"))
console.log(reversedDayOfTheWeek("Friday"))
console.log(reversedDayOfTheWeek("Invalid"))
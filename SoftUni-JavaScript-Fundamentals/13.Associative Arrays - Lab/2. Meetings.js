function meetings(arangements){
    let calendar = {};
    for (let arangement of arangements){
        let day = arangement.split(` `)[0];
        let person = arangement.split(` `)[1];
        if (calendar[day]){
            console.log(`Conflict on ${day}!`)
            continue
        } else {
            calendar[day] = person;
            console.log(`Scheduled for ${day}`)
        }
    }
    let calendarAsArray = Object.entries(calendar)
    calendarAsArray.map(x => console.log(`${x[0]} -> ${x[1]}`))
}
meetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])
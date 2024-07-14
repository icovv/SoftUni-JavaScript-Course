function solve([text]){
    let pattern = /\b(?<day>\d{2})(?<separator>[-.\/])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/gm
    let output = pattern.exec(text)
    while(output != null){
        let {day,separator,month,year} = output.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        output = pattern.exec(text)
    }
}
solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
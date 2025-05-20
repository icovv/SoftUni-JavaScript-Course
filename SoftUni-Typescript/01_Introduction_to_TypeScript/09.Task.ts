function fridayThe13th(parameter:unknown[]): void{
        enum Months{
            January,
            February,
            March,
            April,
            May,
            June,
            July,
            August,
            September,
            October,
            November,
            December
        }
        for (let el of parameter){
            if(el instanceof Date){
                let date = el.getDate();
                let day = el.getDay();
                let month = el.getMonth();
                let year = el.getFullYear()

                if(date == 13 && day == 5){
                    console.log(`${date} ${Months[month]} ${year}`);
                    
                }
            }
        }
}

fridayThe13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
    ]);
fridayThe13th([

    new Date(2024, 0, 13),
    
    new Date(2024, 1, 13),
    
    new Date(2024, 2, 13),
    
    new Date(2024, 3, 13),
    
    new Date(2024, 4, 13),
    
    new Date(2024, 5, 13),
    
    new Date(2024, 6, 13),
    
    new Date(2024, 7, 13),
    
    new Date(2024, 8, 13),
    
    new Date(2024, 9, 13),
    
    new Date(2024, 10, 13),
    
    new Date(2024, 11, 13)
    
    ])

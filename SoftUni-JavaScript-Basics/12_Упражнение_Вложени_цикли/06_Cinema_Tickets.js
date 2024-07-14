function tickets (input) {
    let i = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;

    while(input[i] !== `Finish`) {
        let movieName = input[i];
        let ticketsLimit = Number(input[i + 1]);
        i += 2;
        let clientsCounter = 0;
        while (input[i] === "standard" || input[i] === "kid" ||input[i] === "student" ||input[i] === "End" ){
            switch (input[i]) {
                case `standard` :
                    i += 1
                    clientsCounter += 1
                    standartTickets += 1
                    break;
                case `kid` :
                    i += 1
                    clientsCounter += 1;
                    kidsTickets += 1
                    break;
                case `student` :
                    i += 1
                    clientsCounter += 1
                    studentTickets += 1
                    break;
                case `End` :
                    i += 1;
                    break;
            }
        }
        console.log(`${movieName} - ${((clientsCounter / ticketsLimit) * 100).toFixed(2)}% full.`)
    }
    console.log (`Total tickets: ${kidsTickets + studentTickets + standartTickets}`)
    console.log(`${((studentTickets/ (kidsTickets + studentTickets + standartTickets))*100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets/ (kidsTickets + studentTickets + standartTickets))*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets/ (kidsTickets + studentTickets + standartTickets))*100).toFixed(2)}% kids tickets.`);
}
tickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])

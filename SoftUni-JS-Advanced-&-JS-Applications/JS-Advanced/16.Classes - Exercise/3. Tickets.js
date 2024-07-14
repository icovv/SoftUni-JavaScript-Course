function solve(tickets,sorting){
    let output = [];
class Ticket{
    constructor(destination,price,status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

}
    for (let ticket of tickets){
        let [destination,price,status] = ticket.split(`|`);
        price = Number(price)
        let place = new Ticket(destination,price,status)
        output.push(place);
    }
    if (sorting == `status`){
    output.sort((a,b) => a.status.localeCompare(b.status));
    } else if (sorting == ``){
    output.sort((a,b) => a-b);
    } else if (sorting == `destination`){
    output.sort((a,b) => a.destination.localeCompare(b.destination));
    }
    return output

}
solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination')
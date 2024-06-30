function books(input){

    let numPage = Number(input[0]);
    let hourPage = Number(input[1]);
    let numDays = Number(input[2]);

    let numHourPage = numPage / hourPage
    let hourRea = numHourPage / numDays

    console.log(hourRea)


}

books(["212" , "20" , "2"])
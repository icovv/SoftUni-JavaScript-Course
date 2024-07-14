function tennisRanklist(input) {

    let numTournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = startPoints;
    let wins = 0

    for (let i = 1; i <= numTournaments ; i += 1){
        switch (input[i+1]){
            case "W":
                points += 2000
                wins += 1
                break;
            case "F":
                points += 1200
                break;
            case "SF":
                points += 720
                break;
        }
    }
    console.log(`Final points: ${points}`)
    console.log(`Average points: ${Math.floor((points - startPoints)/numTournaments)}`)
    console.log(`${((wins/numTournaments)* 100).toFixed(2)}%`)

}

tennisRanklist(["5","1400","F","SF","W","W","SF"])

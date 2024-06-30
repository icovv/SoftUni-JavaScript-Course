function oscars (input) {
    let actorName = input [0];
    let pointsFromAcademy = Number(input[1]);
    let numGraders = Number(input[2]);
    let grade = pointsFromAcademy;

    for (let i = 1; i < numGraders * 2; i += 2 ){
       //console.log (`Name - ${input[i+2]}`)
       //console.log (`Points - ${input[i+3]}`)
        let actorNameLenght = input[i+2]
        let actorPoints = Number(input[i+3])
        grade += (actorNameLenght.length * actorPoints) / 2

        if (grade > 1250.50) {
            break;
        }
    }

if (grade > 1250.5) {
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${grade.toFixed(1)}!`)
} else {
    console.log(`Sorry, ${actorName} you need ${(1250.5 - grade).toFixed(1)} more!`)

}
}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])


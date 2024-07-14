function solve([input]){
    let pattern = /(\||#)(?<item>[A-Za-z\s]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let daykCal = 2000;
    let totalCalories = 0;
    let foodFor = 0;
    let output = [];
    let match = pattern.exec(input);
    while (match != null){
        let foodName = match.groups.item;
        let expirationDate = match.groups.expiration;
        let calories = Number(match.groups.calories);
        totalCalories += calories
        output.push(`Item: ${foodName}, Best before: ${expirationDate}, Nutrition: ${calories}`);

        match = pattern.exec(input)
    }
    foodFor = Math.floor(totalCalories/daykCal);
    console.log(`You have food to last you for: ${foodFor} days!`);
    output.forEach(x => console.log(x))
    // for (let item of output){
    //     console.log(item)
    // }

}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
function traveler (arr){
    let destination = {}
for (let element of arr){
    let country = element.split(` > `)[0];
    let town = element.split(` > `)[1];
    let price = Number(element.split(` > `)[2])
    
    if (!destination[country]){
        destination[country] = {};
    }

    if (!destination[country][town]){
        destination[country][town] = price
    } else if (destination[country][town] > price){
        destination[country][town] = price
    }
}
    let destinationArr = Object.entries(destination);
    destinationArr.sort((a,b) => a[0].localeCompare(b[0]));

    for (let [country,destinations] of destinationArr){
        let finalprint = `${country} -> `;
        let sortedDestinations = Object.entries(destinations).sort((a, b) => a[1] - b[1]);
        
        for (let [town, price] of sortedDestinations) {
            finalprint += `${town} -> ${price} `
        }

        console.log(finalprint)
    }


}
traveler([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])
function solve(arr){
    let output = {};

    for (let item of arr){
        let letter = item[0]
        let productName = item.split(` : `)[0];
        let price = Number(item.split(` : `)[1]);

        if (!output.hasOwnProperty(letter)){
            output[letter] = []
        }

        output[letter].push({productName,price})
        }
        let outputArr = Object.entries(output).sort();
        for (let el of outputArr){
            console.log(el[0]); // console log na bukvata
            let sortedList = output[el[0]].sort((a, b) => a.productName.localeCompare(b.productName))
            for (let item of sortedList){
                console.log(` ${item.productName}: ${item.price}`)
            }
        }
    }
solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
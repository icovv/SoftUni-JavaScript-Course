function solve(arr){
    let output = {}

    for (let item of arr){
        let  [townName,productName, productPrice] = item.split(` | `);
        productPrice = Number(productPrice);

        if (!output.hasOwnProperty(productName)) {
            output[productName] = {
                townName,
                productPrice
            }
        } else if (output[productName].productPrice > productPrice){
            output[productName].productPrice = productPrice;
            output[productName].townName = townName
        }


    }
    let outputArr = Object.entries(output);
    outputArr.forEach((element) => console.log(`${element[0]} -> ${element[1].productPrice} (${element[1].townName})`))
}
solve(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])
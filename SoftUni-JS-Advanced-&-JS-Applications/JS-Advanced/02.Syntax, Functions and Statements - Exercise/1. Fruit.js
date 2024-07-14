function solve(item,weight,pricePerKg){
    let weightInKg = weight/1000;
    console.log(`I need $${(weightInKg * pricePerKg).toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${item}.`)
}
solve('apple', 1563, 2.35)
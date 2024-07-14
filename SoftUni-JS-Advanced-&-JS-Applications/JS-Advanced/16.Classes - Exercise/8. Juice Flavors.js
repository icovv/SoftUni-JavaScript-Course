function solve(string){
    let items = {};
    let bottles = {};
    for (let item of string){
        let [juice,qty] = item.split(` => `);
        qty = Number(qty)
        if (!items.hasOwnProperty(juice)){
            items[juice] = qty
        } else {
            items[juice] += qty
        }
        if (items[juice] >= 1000){
                bottles[juice] = Math.floor(items[juice]/1000) 
        }
    }
    Object.entries(bottles).forEach(x => console.log(`${x[0]} => ${x[1]}`))
}
solve(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])
function store(stock,ordered){
    let storeQty = {};
    for (let i = 0; i < stock.length; i += 2){
        let type = stock[i];
        let qty = Number(stock[i + 1]);
        storeQty[type] = qty
        // console.log(storeQty)
    }

    for (let j = 0; j < ordered.length; j += 2){
        let typeOrdered = ordered[j];
        let qtyOrdered = Number(ordered[j + 1]);
        if (typeOrdered in storeQty){
            storeQty[typeOrdered] += qtyOrdered;
        } else {
            storeQty[typeOrdered] = qtyOrdered
        }
    }
    let keyVal = Object.entries(storeQty);

    for (let [key,val] of keyVal){
        console.log(`${key} -> ${val}`)
    }
}
store(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])
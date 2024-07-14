function storage(items){
    let storageObj = {};
    for (let item of items){
        let name = item.split(` `)[0];
        let qty = Number(item.split(` `)[1]);
        if (storageObj[name]){
            storageObj[name] += qty
        } else {
            storageObj[name] = qty
        }
    }
    let storageArr = Object.entries(storageObj);
    storageArr.map(x => console.log(`${x[0]} -> ${x[1]}`))
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])
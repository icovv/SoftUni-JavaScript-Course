function catalogue(arr){
    let object = []
for (let item of arr){
    let token = item.split(` : `);
    let letter = `${token[0][0]}`
    let name = token[0];
    let price = Number(token[1])
    let obj ={
        firstLetter: letter,
        name: name,
        price: price,
    }
    object.push(obj)
}
object.sort((a,b) => a.name.localeCompare(b.name))
for (let i =0; i < object.length; i++){

    if (i == 0){
        console.log(`${object[i].firstLetter}\n  ${object[i].name}: ${object[i].price}`)
    }else if (object[i].firstLetter == object[i-1].firstLetter){
        console.log(`  ${object[i].name}: ${object[i].price}`)
    } else {
        console.log(`${object[i].firstLetter}\n  ${object[i].name}: ${object[i].price}`)
    }
}
}
catalogue([

    'Omlet : 5.4',
    
    'Shirt : 15',
    
    'Cake : 59'
    
    ])
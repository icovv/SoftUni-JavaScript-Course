function addressBook(info){
    let book = {};
    for (let adress of info){
        let person = adress.split(`:`)[0];
        let address = adress.split(`:`)[1];
        book[person] = `${address}`;
    }
    let bookAsArray = Object.entries(book);
    bookAsArray.sort((a,b) => a[0].localeCompare(b[0])).map(x => console.log(`${x[0]} -> ${x[1]}`))
}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])
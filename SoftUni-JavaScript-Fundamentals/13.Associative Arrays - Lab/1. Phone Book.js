function book(info){
    let contactBook = {}
    for (let contact of info){
        let name = contact.split(` `)[0];
        let phone = contact.split(` `)[1];
        contactBook[name] = phone
        // console.log(phone)
    }
    let array = Object.entries(contactBook)
    for (let [key,value] of array){
        console.log(`${key} -> ${value}`)
    }
}
book(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])
function converter (firstName,lastName,hariColor){
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hariColor,
    }
    console.log(JSON.stringify(person))
}

converter(`Peter`,`Peter`,`brown`)

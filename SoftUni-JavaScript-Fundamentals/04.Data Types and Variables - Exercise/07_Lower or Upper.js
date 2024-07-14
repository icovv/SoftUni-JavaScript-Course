function letters(first){
    let code = first.charCodeAt()

    if (code >= 65 && code <= 90){
        console.log(`upper-case`)
    } else {
        console.log(`lower-case`)
    }
}

letters(`L`)
letters(`f`)

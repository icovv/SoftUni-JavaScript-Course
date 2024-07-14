function charactersLength(password){
    let charCount = 0;

    for (let i = 0; i < password.length; i++){
        charCount = i + 1
    }

    if (charCount >= 6 && charCount <= 10 ){
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}

// charactersLength('logIn')
// charactersLength('MyPass123')
charactersLength('Pa$s$s')
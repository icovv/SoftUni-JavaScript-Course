function passwordValidator(password){
    if (charactersLength(password) == true && validationLettersAndDigits(password) == true && digitsCount(password) == true){
        console.log(`Password is valid`)
    }
    if (charactersLength(password) == false){
        console.log("Password must be between 6 and 10 characters")
    }
    if (validationLettersAndDigits(password) == false){
        console.log("Password must consist only of letters and digits")
    }
    if (digitsCount(password) == false){
        console.log("Password must have at least 2 digits")
    }
    function charactersLength(password){
        let charCount = 0;

        for (let i = 0; i < password.length; i++){
            charCount = i + 1
        }

        if (charCount >= 6 && charCount <= 10 ){
            return true
        } else {
            return false
        }
    }
    function validationLettersAndDigits(password){
        for (let i = 0; i < password.length; i++){
            let currCHar = password[i].charCodeAt(0)
            if (!((currCHar >= 48 && currCHar <= 57) || (currCHar >= 65 && currCHar <= 90) || (currCHar >= 97 && currCHar <= 122))){
                return false
            }
        }
        return true
    }
    function digitsCount (password){
        let digitsCount = 0
        for (let i = 0; i < password.length; i++){
            let currCHar = password[i].charCodeAt(0)
            if ((currCHar >= 48 && currCHar <= 57)){
                digitsCount += 1
            }
        }
        if (digitsCount >= 2){
            return true
        } else {
            return false
        }
    }
}
// passwordValidator('logIn')
// passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
function palindromeIntegers(num){

    for (let curNum of num){
        let isPalindrome = palindromeValidation(curNum)
        console.log(isPalindrome)
    } 

    function palindromeValidation(num){

        let numAsString = String(num)
        let reversedString = ``;

        for (let i = numAsString.length - 1; i >= 0; i--){
            let currChar = numAsString[i];
            reversedString += `${currChar}`
            
        }
        
        let isPalindrome = numAsString == reversedString
        return isPalindrome
    }
}

// palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])
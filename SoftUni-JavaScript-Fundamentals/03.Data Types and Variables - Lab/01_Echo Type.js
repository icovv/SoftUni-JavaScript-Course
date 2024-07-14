function type(text){
    if(typeof text == `string` || typeof text == `number`){
        console.log(typeof text)
        console.log(text)
    } else {
        console.log(typeof text)
        console.log(`Parameter is not suitable for printing`)
    }

}

type('Hello, JavaScript!')
type(null)
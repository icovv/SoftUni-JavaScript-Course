function loadingBar (percentage){

    let percentageForBar = percentage/10
    
    if (percentage == 100){
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    } else {
        console.log(`${percentage}% [${`%`.repeat(percentageForBar)}${`.`.repeat(10 - percentageForBar)}]`)
        console.log(`Still loading...`)
    }
    
}

// loadingBar(30)
// loadingBar(50)
loadingBar(100)
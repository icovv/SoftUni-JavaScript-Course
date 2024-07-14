//function age(parameter){
    //if (parameter >= 0 && parameter <= 2){
      //  console.log(`baby`)
    //} else if (parameter >= 3 && parameter <= 13){
      //  console.log(`child`)
    //} else if (parameter >= 14 && parameter <= 19){
      //  console.log(`teenager`)
    //} else if (parameter >= 20 && parameter <= 65){
      //  console.log(`adult`)
    //} else if (parameter >= 65){
      //  console.log(`elder`)
    //} else {
      //  console.log("out of bounds")
    //}
//}


function age(parameter){
    if (parameter < 0){
        console.log("out of bounds")
    } else if (parameter <= 2){
        console.log(`baby`)
    } else if (parameter <= 13){
        console.log(`child`)
    } else if (parameter <= 19){
        onsole.log(`teenager`)
    } else if (parameter <= 65) {
        console.log(`adult`)
    } else {
        console.log(`elder`)
    }
}

age(55)
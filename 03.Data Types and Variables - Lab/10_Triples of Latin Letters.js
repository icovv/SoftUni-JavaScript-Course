function triples (num){

    for (let i = 0; i < num; i ++){
        
        for (let b = 0; b < num; b ++){
            
            for (let c = 0; c < num; c ++){
                let letter1 = String.fromCharCode(97+i)
                let letter2 = String.fromCharCode(97+b)
                let letter3 = String.fromCharCode(97+c)
                console.log(`${letter1}${letter2}${letter3}`)
            }
        }
    }

}

triples(3)
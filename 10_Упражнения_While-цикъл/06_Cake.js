function cake (input){
    let width = input[0];
    let length = Number(input[1]);
    let slice = input[2]

    let cakeQuantity = width * length;

    let i= 3;

    while (cakeQuantity > 0) {
        if (slice === `STOP`) {
            break;
        }

        cakeQuantity -=  Number(slice)

        slice = input[i];
        i+= 1
    }

    if (slice = `Stop` && cakeQuantity >= 0) {
        console.log(`${cakeQuantity} pieces are left.`)
    } else if (cakeQuantity < 0) {
        console.log (`No more cake left! You need ${Math.abs(cakeQuantity)} pieces more.`)
    }

}
cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])




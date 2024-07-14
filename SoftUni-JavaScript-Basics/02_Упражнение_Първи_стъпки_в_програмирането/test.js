function basketball (input) {

    let basketballShoes = Number(input[0]) - (Number(input[0])*(40/100));
    let basketballKit = basketballShoes - (basketballShoes*(20/100));
    let basketballBall = basketballKit / 4;
    let basketballAccs = basketballBall / 5

    console.log(Number(input[0]) + basketballShoes + basketballKit + basketballBall + basketballAccs)



}

basketball(["365"])
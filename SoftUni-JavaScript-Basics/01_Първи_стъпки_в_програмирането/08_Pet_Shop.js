function petShop(input){
    let dogsPrice = 2.50;
    let catsPrice = 4;
    let dogsNum = Number(input[0]);
    let catsNum = Number(input[1]);
    let total = (`${dogsNum}`* dogsPrice) + (`${catsNum}` * catsPrice)
    console.log(total)


}

petShop(["5", "4"])
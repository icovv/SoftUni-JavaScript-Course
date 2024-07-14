function foodDelivery(input){

    let chicken = 10.35;
    let fish = 12.40;
    let vegetarian = 8.15;
    let delivery = 2.50;

    //desert 20% ot obshtata smetka (bez dostavkata)

    let numChicken = Number(input[0]);
    let numFish = Number(input[1]);
    let numVeg = Number(input[2]); 

    let totalChicken = chicken * numChicken
    let totalFish = numFish * fish
    let totalVeg = numVeg * vegetarian

    let desert = (totalChicken + totalFish + totalVeg) * (20/100)

    console.log(desert + totalChicken + totalFish + totalVeg + delivery)

}

foodDelivery(["2", "4", "3" ])
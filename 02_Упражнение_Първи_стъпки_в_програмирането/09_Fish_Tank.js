function fish (input) {

    let daljina = Number(input[0]);
    let shirina = Number(input[1]);
    let visochina = Number(input[2]);
    let procent = Number(input[3])/100; // 17(0.17) procenta sa zaeti s pqsyk // 83(0.83) procenta sa svobodni // 100%(1) - 0.17(17%) 

    let obem = daljina * shirina * visochina

    let obemInCm = obem/1000

    let litres = obemInCm * (1-procent)

    console.log(litres)







}


fish(["85", "75" , "47" , "17"])
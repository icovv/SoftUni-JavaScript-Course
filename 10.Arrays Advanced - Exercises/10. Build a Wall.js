function buildAWall(arr){
    let arrAsNum = arr.map(Number);
    let crews = arrAsNum.filter(len => len < 30).length;
    let totalConcrete = 0;
    let output = [];
    let cost = 0;
    
    while (crews !== 0){
        let concrete = 0;
        for (let i = 0; i < arrAsNum.length; i ++){
            if(arrAsNum[i] !== 30){
                arrAsNum[i] += 1;
                concrete += 195;
                if (arrAsNum[i] == 30){
                    crews -= 1
            }
            }
        }
    totalConcrete += concrete;
    output.push(concrete)
    }
    cost = totalConcrete * 1900;
    console.log(output.join(`, `));
    console.log(`${cost} pesos`)
}

buildAWall([21, 25, 28])
// buildAWall([21, 25, 30])
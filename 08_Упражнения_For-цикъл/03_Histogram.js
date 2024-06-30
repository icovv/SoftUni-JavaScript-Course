function histogram (input) {
    let num = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= num ; i +=1){


        if(input[i] < 200) {
            p1 += 1   
        } else if (input[i] >= 200 && input[i] < 400){
            p2 += 1
        } else if (input[i] >= 400 && input[i] < 600){
            p3 += 1
        } else if (input[i] >= 600 && input[i] < 800){
            p4 += 1
        } else {
            p5 += 1
        }
    }

    console.log(`${((p1 / num) * 100).toFixed(2)}%`)
    console.log(`${((p2 / num) * 100).toFixed(2)}%`)
    console.log(`${((p3 / num) * 100).toFixed(2)}%`)
    console.log(`${((p4 / num) * 100).toFixed(2)}%`)
    console.log(`${((p5 / num) * 100).toFixed(2)}%`)
}

histogram (["3","1","2","999"])


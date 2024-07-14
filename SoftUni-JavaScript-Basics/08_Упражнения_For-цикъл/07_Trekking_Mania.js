function trekkingMania (input) {
    let groupClimbers = Number(input[0]);

    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimandjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
    let total = 0


    for (let i = 1; i <= groupClimbers; i +=1){
        if(input[i] <= 5){
            musalaClimbers += Number(input[i])
        } else if (input[i] > 5 && input[i] <= 12){
            monblanClimbers += Number(input[i])
        } else if (input[i] > 12 && input[i] <= 25){
            kilimandjaroClimbers += Number(input[i])
        } else if (input[i] > 25 && input[i] <= 40){
            k2Climbers += Number(input[i])
        } else if (input[i] > 40){
            everestClimbers += Number(input[i])
        }
       total = musalaClimbers + monblanClimbers + kilimandjaroClimbers + k2Climbers + everestClimbers
        
    }
    console.log(`${((musalaClimbers/total ) * 100).toFixed(2)}%`);
    console.log(`${((monblanClimbers/total ) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaroClimbers/total ) * 100).toFixed(2)}%`);
    console.log(`${((k2Climbers/total ) * 100).toFixed(2)}%`);
    console.log(`${((everestClimbers/total ) * 100).toFixed(2)}%`);
}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"])

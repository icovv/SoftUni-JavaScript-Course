function basketbal (input) {

    let yearlySubscription = Number(input[0]); // 365 lv godishna suma za tren

    let shoesPerc = yearlySubscription * (40/100);
    let shoes = yearlySubscription - shoesPerc;

    let kitPerc = shoes * (20/100);
    let kit = shoes - kitPerc;

    let ball = kit / 4

    let acs = ball / 5

    console.log(shoes + ball + kit + acs + yearlySubscription)

 //console.log(acs)

}

basketbal(["365"])
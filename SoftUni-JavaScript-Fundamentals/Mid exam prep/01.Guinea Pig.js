function guineaPig(arr){

    let foodInGr = Number(arr[0]) * 1000;
    let hayInKg = Number(arr[1]) * 1000;
    let cover = Number(arr[2]) * 1000;
    let guineaWeight = Number(arr[3]) * 1000;
    let dayCounter = 0;
    
    while (foodInGr > 0 && hayInKg > 0 && cover > 0){
        if (dayCounter == 30){
            break;
        }
        
        foodInGr -= 300;
        dayCounter += 1;

        if (dayCounter % 2 === 0){
            hayInKg -= foodInGr * (5/100) 
        }

        if (dayCounter % 3 === 0){
            cover -= guineaWeight / 3
        }        
    }
    if (foodInGr > 0 && hayInKg > 0 && cover > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGr/1000).toFixed(2)}, Hay: ${(hayInKg/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`)
    } else {
        console.log("Merry must go to the pet store!")
    }
}

guineaPig(["10","5","5.2","1"])
guineaPig((["9",

"5",

"5.2",

"1"]))
guineaPig((["1",

"1.5",

"3",

"1.5"

]))
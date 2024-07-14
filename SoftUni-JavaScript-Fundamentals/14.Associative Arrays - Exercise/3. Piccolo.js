function piccolo (cars){
    let carObjj = {}
    for (let i = 0; i < cars.length; i++){
        let command = cars[i].split(`, `)[0];
        let car = cars[i].split(`, `)[1];
        if (command == `IN` && !carObjj[car]){
            carObjj[car] = 1
        } else if (command == `OUT` && carObjj[car]){
            delete carObjj[car]
        }
    }
    let carArr = Object.entries(carObjj);
    carArr.sort((a,b) => a[0].localeCompare(b[0]))
    if(carArr == 0){
        console.log(`Parking Lot is Empty`)
    } else {
        carArr.map(x => console.log(x[0]))
    }
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])
// piccolo(['IN, CA2844AA',

// 'IN, CA1234TA',

// 'OUT, CA2844AA',

// 'OUT, CA1234TA'])
function supplies(input){
// •	Брой пакети химикали - цяло число в интервала [0...100]
//•	Брой пакети маркери - цяло число в интервала [0...100]
//•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
//•	Процент намаление - цяло число в интервала [0...100]

    let pen = 5.80
    let marker = 7.20
    let preparatLitar = 1.20

    let numPen = Number(input[0]) * pen;
    let numMarker = Number(input[1]) * marker;
    let numPreparat = Number(input[2]) * preparatLitar;
    let discountPerc = Number(input[3]) / 100;
    let discountAmount = ((numPen + numMarker + numPreparat) * discountPerc)

    console.log((numPen + numMarker + numPreparat) - discountAmount)

}

supplies(["2 ","3 ","4 ","25 "])
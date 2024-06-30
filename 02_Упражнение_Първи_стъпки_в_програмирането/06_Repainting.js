function repainting(input) {

    let nylon = 1.50 // kv. metar
    let paint = 14.50 // litar
    let razreditel = 5.00 // litar

    let reqAmountNylon = Number(input[0]);
    let reqAmountPaint = Number(input[1]);
    let reqAmountRazredite = Number(input[2]);
    let reqWorkHours = Number(input[3]);
    let discountWork = reqAmountPaint * (10/100)

    let totalNylon = (reqAmountNylon + 2) * nylon
    let totalPaint = (reqAmountPaint + discountWork) * paint
    let totalRazreditel = (reqAmountRazredite) * razreditel

    let razhodi = totalNylon + totalPaint + totalRazreditel + 0.40
    let maistori = (razhodi * (30 / 100)) * reqWorkHours

    console.log(maistori + razhodi)


}

repainting(["10" , "11" , "4" , "8"])
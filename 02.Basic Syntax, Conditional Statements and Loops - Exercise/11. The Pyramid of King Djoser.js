function pyramid(base,increment){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let counter = base;

    while (base >= counter){
    height += 1
    
    if (counter <= 2){
        gold = counter * counter;
        break;
    }

    if (height % 5 === 0){
        lapis += (counter * 4) - 4
        stone += (counter - 2) * (counter - 2)
    } else {
    stone += (counter - 2) * (counter - 2)
    marble += (counter * 4) - 4
    }
    
    
    counter -= 2
    }
    stone *= increment
    marble *= increment
    lapis *= increment
    gold *= increment
    height *= increment

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(height)}`)
}

pyramid(11,1)
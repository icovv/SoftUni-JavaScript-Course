function spices (yield){
    let spicesCounter = 0;
    let daysCounter = 0;
    while (yield >= 100){
        spicesCounter += yield
        if (spicesCounter >= 26){
            spicesCounter -= 26
        }
        daysCounter += 1
        yield -= 10
    }

    if (spicesCounter >= 26){
        console.log(daysCounter)
        console.log(spicesCounter - 26)
    } else {
        console.log(daysCounter)
        console.log(spicesCounter)
    }
}

spices (111)
spices (450)
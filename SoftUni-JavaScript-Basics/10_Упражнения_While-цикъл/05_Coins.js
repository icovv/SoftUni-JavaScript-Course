function coins (input) {
    let money = Math.floor (input[0] * 100);
    let change = 0
  
    let i = 1;

    while (money > 0) {

        if(money >= 200) {
            change += 1
            money -= 200
        } else if (money >= 100) {
            change += 1
            money -= 100
        } else if (money >= 50) {
            change += 1
            money -= 50
        } else if (money >= 20) {
            change += 1
            money -= 20
        } else if (money >= 10) {
            change += 1
            money -= 10
        } else if (money >= 5) {
            change += 1
            money -= 5
        } else if (money >= 2) {
            change += 1
            money -= 2
        } else if (money >= 1) {
            change += 1
            money -= 1
        }

        
    }
    console.log (change)
}
coins (["2.73"])
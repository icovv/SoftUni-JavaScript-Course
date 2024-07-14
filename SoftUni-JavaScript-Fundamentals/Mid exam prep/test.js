function test (arr){
    let pirateShip = arr.shift().split(`>`).map(Number);
console.log(pirateShip.filter(health => health <= (70 * 0.2)))
}
test(["12>13>11>20>66"])
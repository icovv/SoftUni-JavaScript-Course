function miner(arr){
    let minedAmount = {};
    for (let i = 0; i < arr.length; i+= 2){
        let resource = arr[i];
        let amount = Number(arr[i + 1])
        
        if (minedAmount[resource]){
            minedAmount[resource] += amount
        } else {
            minedAmount[resource] = amount
        }
    }
    let minedAmountArr = Object.entries(minedAmount);
    minedAmountArr.map(x => console.log(`${x[0]} -> ${x[1]}`))
}
miner([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])
function solve (arr){
    let required = {shards: 0, fragments: 0, motes: 0};
    let others = {};
    let legendaries = {shards: "Shadowmourne" ,fragments: "Valanyr" ,motes: "Dragonwrath"  }
    let arrSplit = arr.toLowerCase().split(` `) 
    for (let i = 0; i < arrSplit.length; i+= 2){
        let points = Number(arrSplit[i]);
        let name = arrSplit[i + 1];
        if (required.hasOwnProperty(name)){
            required[name] += points
            if (required[name] >= 250){
            let reward = legendaries[name]
            console.log(`${reward} obtained!`)
            required[name] = required[name] - 250
                break;
            }
        } else if (others[name]){
            others[name] += points
        } else {
            others[name] = points
        }
        }
        let requiredArr = Object.entries(required);
        requiredArr.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(x => (console.log(`${x[0]}: ${x[1]}`))) 
        let othersArr = Object.entries(others).sort((a,b)=> a[0].localeCompare(b[0])).map(x => (console.log(`${x[0]}: ${x[1]}`)))
    }
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
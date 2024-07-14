function solve(arr){
    arr.shift();
    let obj = []
    for (let item of arr){
        let townName = item.split(`|`)[1].trim()
        let Latitude = Number(item.split(`|`)[2].trim()).toFixed(2)
        let Longitude = Number(item.split(`|`)[3].trim()).toFixed(2);
        obj.push({
            Town: townName,
            Latitude: Number(Latitude),
            Longitude: Number(Longitude)
        })
    }
    console.log(JSON.stringify(obj))
}
solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])
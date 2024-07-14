function towns (arr){
    let townsObject = {};

    for (let i = 0; i < arr.length; i ++){
        let [town,latitude,longitude] = arr[i].split(` | `);
        townsObject.town = town;
        townsObject.latitude = Number(latitude).toFixed(2);
        townsObject.longitude = Number(longitude).toFixed(2);
        console.log(townsObject)
    }

}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])
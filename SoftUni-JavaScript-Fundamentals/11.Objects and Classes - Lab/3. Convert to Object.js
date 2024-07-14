function converter(jsonItem){
    let convertedJson = JSON.parse(jsonItem);
    for(let [key, value] of Object.entries(convertedJson)){
        console.log(`${key}: ${value}`)
    }
}
converter('{"name": "George", "age": 40, "town": "Sofia"}')
function dictionary (arr){
    let object = {};
    for (let description of arr){
        let obj = JSON.parse(description);
        let name = Object.keys(obj)[0];
        let descr = Object.values(obj)[0];
        object[name] = `${descr}`
    }
    let array = Object.entries(object);
    array.sort((a,b) => a[0].localeCompare(b[0])).map(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`))
}
// function dictionary (arr){
//     let array = [];
//     for (let descr of arr){
//         let item = JSON.parse(descr);
//         let name = Object.keys(item)[0];
//         let description = Object.values(item)[0];
//         let descrAsObj = {name: name, description: description};
//         array.push(descrAsObj);
        
//     }
//     array.sort((a,b) => a.name.localeCompare(b.name)).map(x => console.log(`Term: ${x.name} => Definition: ${x.description}`))
// }
dictionary(['{"Coffee": "A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'])


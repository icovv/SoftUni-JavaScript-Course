function solution(){
let recipe = {
    apple: {carbohydrate: 1 , flavour: 2},
    lemonade: {carbohydrate: 10 , flavour: 20},
    burger: {carbohydrate: 5 , flavour: 3 , fat: 7},
    eggs: {protein: 5, flavour: 1, fat: 1 },
    turkey: {protein: 10, carbohydrate: 10 , flavour: 10, fat: 10 },

}
let storage = {
    protein: 0,
    carbohydrate: 0,
    flavour: 0,
    fat: 0
}
return function inner(text){
    let command = text.split(` `)[0];

    if (command == `restock`){
        return stock()
    } else if (command == `prepare`){
       return prepareFood()
    } else if (command == `report`){
        return reportFood()
    }

    function stock(){
        let microEl = text.split(` `)[1];
        let qty = Number(text.split(` `)[2]);
        storage[microEl] += qty
        return `Success`
    }

    function prepareFood(){
        let recipeToCook = text.split(` `)[1];
        let qty = Number(text.split(` `)[2]);
        for (let [key,val] of Object.entries(recipe[recipeToCook])){
            let needEl = val * qty;
            if (storage[key] < needEl){
                return `Error: not enough ${key} in stock`
            }
            storage[key] -= needEl;
        }
        return `Success`
    }
    function reportFood(){
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }
}

}

let manager = solution ();

console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
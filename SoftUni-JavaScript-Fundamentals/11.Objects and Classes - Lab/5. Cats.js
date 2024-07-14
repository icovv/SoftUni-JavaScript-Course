// function solve(catsAsString){
// class Cat{
//     name;
//     age;

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayMeow(){
//         console.log(`${this.name}, age ${this.age} says Meow`)
//     }

    
// }
//     for (let i = 0;  i < catsAsString.length; i++){
//             let token = catsAsString[i].split(` `);
//             let catName = token[0];
//             let catAge = token[1];
//             let cat = new Cat (catName, catAge)
//             cat.sayMeow()
//         }

// }

// solve(['Candy 1', 'Poppy 3', 'Nyx 2'])

function solve(catsAsString){
    class Cat{
        name;
        age;
    
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        sayMeow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    
        
    }
         let cats = [];
        for (let i = 0;  i < catsAsString.length; i++){
                let token = catsAsString[i].split(` `);
                let catName = token[0];
                let catAge = token[1];
                let cat = new Cat (catName, catAge)
                cats.push(cat)
            }

            for (let cat of cats){
                cat.sayMeow();
            }
    
    }
    
    solve(['Candy 1', 'Poppy 3', 'Nyx 2'])
    

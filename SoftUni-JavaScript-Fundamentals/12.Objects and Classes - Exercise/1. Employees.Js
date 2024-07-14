// function employees(arr){
//     for (let i = 0; i < arr.length; i ++){
//         console.log(`Name: ${arr[i]} -- Personal Number: ${arr[i].length}`)
//     }
// }

function employees (arr){
    let person = {}
    for (let i = 0; i < arr.length; i ++){
        person.name = arr[i];
        person.personalNum = arr[i].length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`)
    }
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])
// function triangle (num){
//     for (let number = 1; number <= num; number += 1){
//         console.log(`${number}`.repeat(number))
//     }
// }

function triangle(num){
    for (let row = 1; row <= num; row += 1){
        let output = ``; 
        for (let col = 1; col <= row; col += 1){
            output += `${row} `
        }
        console.log(output)
    }
}


triangle (3)
function pyramid (input) {
    let n = Number(input[0]);
    let number = 0;
    for (let row = 1; row <= n ; row += 1 ){
        let print = ``;
        for (let col = 1; col <= row; col += 1){
            number += 1
            print += `${number} `
            if (number >= n) {
                break;
            }
        }
        console.log(print)
        if (number >= n) {
            break; 
    }
}
}
pyramid(["7"])
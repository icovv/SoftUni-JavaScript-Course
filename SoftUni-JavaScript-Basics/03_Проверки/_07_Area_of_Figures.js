function areaOfFigures (input) {
    let figure = input[0];

    if (figure === "square") {
        let side = Number(input[1]);
        console.log((side * side).toFixed(3))
    } else if (figure === "rectangle") {
        let side = Number(input[1]);
        let sideB = Number(input[2]);
        console.log((side * sideB).toFixed(3))
    
    } else if (figure === "triangle") {
        let side = Number(input[1]);
        let sideB = Number(input[2]);
        console.log(((side * sideB)/2).toFixed(3))
    } else if (figure === "circle"){
        let side = Number(input[1]);
        console.log((Math.PI * side ** 2).toFixed(3))
    }



}

areaOfFigures(["triangle", "4.5", "20"])


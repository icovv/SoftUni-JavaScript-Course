function building (input) {
    let floorsTotal = Number(input[0]);
    let roomsOnEachFloor = Number(input[1]);
    for (let floors = floorsTotal; floors >= 1; floors -=1){
        let string = '';
        for (let rooms = 0; rooms < roomsOnEachFloor; rooms += 1){
            if (floors === floorsTotal){
                string += `L${floors}${rooms} `
            } else if (floors % 2 === 0){
                string += `O${floors}${rooms} `
            } else {
                string += `A${floors}${rooms} `
            }
        }
        console.log(string)
    }
}
building (["1", "2"])
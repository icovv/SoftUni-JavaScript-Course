function Projects(input) {
    let name = input[0];
    let number = Number(input[1]);
    let reqTime = number * 3

    console.log(`The architect ${name} will need ${reqTime} hours to complete ${number} project/s.`)

}

Projects(["George", "4"])
function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height= Number(input[2]);
    let command = input [3];

    let freeSpce = width * length * height;

    let i = 4;

    while (freeSpce > 0) {
        if (command === `Done`) {
            break;
        }

        freeSpce -= Number(command);
        
        command = input[i];
        i += 1
    }

    if (command = `Done` && freeSpce >= 0) {
        console.log(`${freeSpce} Cubic meters left.`)
    } else if (freeSpce < 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpce)} Cubic meters more.`)
    }
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])

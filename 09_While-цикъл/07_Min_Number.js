function minNumber(input) {
    let command = input[0];

    let i = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (num < minNum) {
            minNum = num
        }

        command = input[i];
        i += 1;

    }
    console.log(minNum)
}

minNumber (["-10",
"20",
"-30",
"Stop"])


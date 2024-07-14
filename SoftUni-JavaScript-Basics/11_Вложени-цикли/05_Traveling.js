function traveling (input) {
    let command = input[0];
    let reqAmount = Number(input[1]);
    let startSave = Number(input[2]);
    let i = 3;

    while (command !== "End"){
        while (startSave < reqAmount) {
            startSave += Number(input[i]);
            i++;
        }
        startSave = 0;
        console.log(`Going to ${command}!`)
        command = input[i];
        reqAmount = input[i + 1];
        i += 2;
    }
}
traveling (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])



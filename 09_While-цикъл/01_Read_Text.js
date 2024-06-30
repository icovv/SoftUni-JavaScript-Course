function readText (input) {
    let text = input[0];

    let i = 1;

    while (text !== `Stop`) {
        
        console.log(text)
        text = input[i]
        i += 1
    }
}

readText (["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])

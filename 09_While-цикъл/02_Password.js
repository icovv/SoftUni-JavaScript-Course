function password(input) {
    let username = input[0];
    let password = input[1];
    let userGuess = input[2];

    let i = 3;

    while (userGuess !== password) {
        userGuess = input[i]
        i += 1
    }

    console.log(`Welcome ${username}!`)

}

password (["Gosho",
"secret",
"secret"])


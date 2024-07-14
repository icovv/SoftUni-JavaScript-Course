function login(input){
    let username = input[0];
    let pass = ``;

    for (let i = username.length - 1; i >= 0 ; i--){
        pass += username[i];
    }

    let guess = input[1];
    let index = 2;
    let tries = 0;

    while (guess != pass){
        guess = input[index]
        tries += 1
        if (tries >= 4){
            console.log(`User ${username} blocked!`)
            return;
        }
        console.log(`Incorrect password. Try again.`)

        index += 1
    }

    console.log(`User ${username} logged in.`)

}
login(['sunny','rainy','cloudy','sunny','not sunny'])
function personalTitles (input){

    let age = Number(input[0]);
    let gender = input[1];

    switch (gender) {
        case "m":
            if (age >= "16") {
                console.log("Mr.");
            } else if (age < "16"){
                console.log("Master");
            }
        break;

        case "f":
            if (age >= "16") {
                console.log("Ms.");
            } else if (age < "16"){
                console.log("Miss");
            }
        break;
    }

}

personalTitles (["12", "f"])
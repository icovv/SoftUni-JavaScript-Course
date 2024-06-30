//получава: име, фамилия, възраст и град

function Concatenate(input){
    let name = input[0];
    let familyName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${name} ${familyName}, a ${age}-years old person from ${town}`)


}

Concatenate(["Maria","Ivanova","19", "Pleven"])
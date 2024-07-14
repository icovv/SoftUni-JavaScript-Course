function breakLunch (input) {

    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let restTime = breakTime / 4;
    let lunchTime = breakTime / 8;

    let requiredTime = breakTime - restTime - lunchTime;

    if (episodeTime > requiredTime) {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeTime - requiredTime)} more minutes.`);
    } else if (episodeTime <= requiredTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(requiredTime - episodeTime)} minutes free time.`)
    }
}

breakLunch (["Game of Thrones", "60", "96"])

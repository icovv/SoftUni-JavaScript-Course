function solve(arr){
    let numOfSongs = arr.shift();
    let typeOfFavourite = arr.pop();
    for (let i = 0; i < numOfSongs; i++){
        let token = arr[i].split(`_`);
        let type = token[0];
        let nameOfSong = token[1];

        if (type === typeOfFavourite || typeOfFavourite === `all`){
            console.log(nameOfSong)
        }
    }
}
solve([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'all'])
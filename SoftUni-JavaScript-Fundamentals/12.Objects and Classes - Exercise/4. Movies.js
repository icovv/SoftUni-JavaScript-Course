function movies (arr){
    let movies = [];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i].includes(`addMovie`)){
            let movieName = arr[i].split(`addMovie `)[1];
            let movieObj = {name: movieName};
            movies.push(movieObj)
        } else if (arr[i].includes(`directedBy`)){
            let [movieName, director] = arr[i].split(` directedBy `)
            let movie = movies.find(movie => movie.name == movieName);
            if (movie){
                movie.director = director;
            }
        } else if (arr[i].includes(`onDate`)){
            let [movieName, date] = arr[i].split(` onDate `)
            let movie = movies.find(movie => movie.name == movieName);
            if (movie){
                movie.date = date;
            }
        }
    }
    for (let movie of movies){
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie))
        }
    }
}
movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])
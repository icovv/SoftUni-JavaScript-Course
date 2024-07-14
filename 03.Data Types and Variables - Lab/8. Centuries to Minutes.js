function solve(centuries){
    let year = centuries * 100;
    let days = Math.trunc(year*365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}

solve(1)
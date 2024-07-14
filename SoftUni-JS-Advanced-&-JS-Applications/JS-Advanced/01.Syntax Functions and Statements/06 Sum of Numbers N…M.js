function solve(string,string2){
    string = Number(string);
    string2 = Number(string2);
    let total = 0;
    for (let i = string; i <= string2; i++){
        total += i
    }
    console.log(total)
}

solve('1', '5')
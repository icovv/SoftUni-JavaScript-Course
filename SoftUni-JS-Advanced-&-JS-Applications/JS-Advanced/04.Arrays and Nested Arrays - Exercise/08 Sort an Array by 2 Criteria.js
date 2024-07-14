function solve(arr){
    arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).map(x => console.log(x))
}
solve(['alpha','beta', 'gamma'])
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
solve(['test', 'Deny', 'omen', 'Default'])
function solve(qty){
    let output = ``
    for (let i = 1; i <= qty; i++){
        output += "* ".repeat(qty)
        if (i == qty){
            break
        }
        output += `\n`
    }
    console.log(output)
}
solve(1)
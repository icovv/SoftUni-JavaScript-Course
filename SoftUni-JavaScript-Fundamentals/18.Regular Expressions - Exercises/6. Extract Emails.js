function solve(input){  
    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g
    for (let item of input.match(pattern)){
        console.log(item)
    }

}
solve(`Many users @ SoftUni confuse email addresses. We @

Softuni.BG provide high-quality training @ home or @ class.

–- steve.parker@softuni.de.`)